import React from "react";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import "./index.css";
import { Link, Route, Switch } from "react-router-dom";
// 布局相关组件
import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;

class Movie extends React.Component {
  render() {
    return (
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[this.props.location.pathname.split("/")[2]]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="in_theaters">
              <Link to="/movie/in_theaters/1">正在热映</Link>
            </Menu.Item>
            <Menu.Item key="coming_soon">
              <Link to="/movie/coming_soon/1">即将上映</Link>
            </Menu.Item>
            <Menu.Item key="top250">
              <Link to="/movie/top250/1">Top250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="main">
          <Content style={{ padding: 10 }}>
            <Switch>
              <Route path="/movie/detail/:id" component={MovieDetail} />
              <Route path="/movie/:movieTypes/:page" component={MovieList} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Movie;
