import React from "react";
import { Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Movie from "./components/movie";
import "./App.css";

const { Header, Footer, Content } = Layout;
// import DatePicker from 'antd/es/date-picker'; // 加载 JS
// import 'antd/es/date-picker/style/css'; // 加载 CSS
const MovieMenu = withRouter(props => {
    // console.log('/' + props.location.pathname.split('/')[1]);
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={['/' + props.location.pathname.split('/')[1]]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="/">
        <NavLink exact to="/">
          首页
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/movie">
        <NavLink to="/movie/in_theaters/1">电影列表</NavLink>
      </Menu.Item>
      <Menu.Item key="/about">
        <NavLink to="/about">关于</NavLink>
      </Menu.Item>
    </Menu>
  );
});

class App extends React.Component {
  render() {
    // console.log(window.location.pathname);
    return (
      <Router>
        <Layout>
          <Header>
            {/* logo */}
            <div className="logo" />
            {/* 导航栏 */}
            <MovieMenu />
          </Header>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movie" component={Movie} />
              <Route path="/about" component={About} />
            </Switch>
          </Content>
          <Footer>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
