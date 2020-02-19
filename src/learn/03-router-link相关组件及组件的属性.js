import React from "react";
import ReactDOM from "react-dom";
// react-router-dom的 3 个核心组件
import { HashRouter, Link, Route } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>首页组件</div>
        )
    }
}
class Login extends React.Component {
    render() {
        return (
            <div>登录组件</div>
        )
    }
}
class User extends React.Component {
    render() {
        return (
            <div>用户组件</div>
        )
    }
}

class Demo extends React.Component {
  render() {
    return (
      <HashRouter>
        <>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/login'>登陆页</Link></li>
                <li><Link to='user'>用户管理</Link></li>
            </ul>

            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/user' component={User}/>
            </div>
        </>
      </HashRouter>
    );
  }
}


ReactDOM.render(<Demo />, document.getElementById("root"));
