import React from "react";
import { Button, Icon, Layout, Row, Col } from "antd";
import fetchJSONP from "fetch-jsonp";

import './MovieDetail.css'

class MovieDetail extends React.Component {
  state = {
    detail: ""
  }
  render() {
    // console.log(this.props.match.params.movieDetail);
    let { detail } = this.state;
    if (!detail) {
      return null
    } else {
      return (
        <Layout className="movie_detail">
          <Button type="primary" onClick={this.goBackMovieList.bind(this)}>
            <Icon type="left" />
            返回电影列表页面
          </Button>
          {/* <div>{this.props.match.params.id}</div> */}
          <h1 style={{ textAlign: 'center' }}>{detail.title}</h1>
          <img
            src={detail.images.large.replace("img3", "img2")}
            alt={detail.title}
            style={{ display: 'block', width: 270, margin: '0 auto' }}
          />
          <h3>主要演员：</h3>
          <Row>
            <Col span={12}>
              <ul className="img_list">
                {detail.casts.map(item => (
                  <li key={item.id}>
                    <img src={item.avatars.small} alt='' style={{ width: 100 }}/>
                    <p style={{ textAlign: 'center' }}>{item.name}</p>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <h3>剧情介绍：</h3>
          <p style={{ textIndent: '2em' }}>{detail.summary}</p>
        </Layout>
      )
    }
  }
  async componentDidMount() {
    let id = this.props.match.params.id;
    const apikey = "apikey=0df993c66c0c636e29ecbb5344252a4a";
    const baseURL = "http://api.douban.com";
    let res = await fetchJSONP(`${baseURL}/v2/movie/subject/${id}?${apikey}`);
    let data = await res.json();
    this.setState({
      detail: data
    });
    // console.log(data);
  }
  goBackMovieList() {
    this.props.history.go(-1);
    // console.log(this.props);
  }
}

export default MovieDetail;
