import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>发送请求</button>
        <button onClick={this.handleAdd.bind(this)}>添加书籍</button>
      </>
    );
  }
  post(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            'contentType': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
  }
  async handleAdd() {
    // let res = await fetch("https://api.oioweb.cn/api/action.php", {
    //   method: "POST",
    //   headers: {
    //       'contentType': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: 'ls'
    //   })
    // });
    // let data = await res.json();
    // console.log(data);
    let data = await this.post("https://api.oioweb.cn/api/action.php", {
        name: 'zs'
    })
    console.log(data)
  }
  async handleClick() {
    let res = await fetch(
      "https://api.oioweb.cn/api/ljfl.php?keyword=香蕉"
    );
    let data = await res.json();
    console.log(data);
  }
}

ReactDOM.render(<Child />, document.getElementById("root"));
