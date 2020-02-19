import React from "react";
import { Spin, Alert, Card, Rate, Pagination } from "antd";
import fetchJSONP from "fetch-jsonp";
import "./MovieList.css";
class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      currentPage: +this.props.match.params.page || 1,
      movieTypes: this.props.match.params.movieTypes,
      pageSize: 10,
      total: 0,
      isLoading: true
    };
  }

  render() {
    // console.log(this.props.match);
    return <>{this.renderMovieList()}</>;
  }
  componentDidMount() {
    this.getMovieList();
  }
  //   getMovieList() {
  //     const { movieTypes } = this.state;
  //     const data = require(`../../mockData/${movieTypes}.json`);
  //     setTimeout(() => {
  //       this.setState({
  //         isLoading: false,
  //         movieList: data.subjects,
  //         total: data.total
  //       });
  //     }, 1500);
  //   }
  async getMovieList() {
    let { movieTypes, currentPage, pageSize } = this.state;
    //   console.log(movieTypes, currentPage)
    const apikey = "apikey=0df993c66c0c636e29ecbb5344252a4a";
    const baseURL = "http://api.douban.com";
    const start = (currentPage - 1) * pageSize;
    let res = await fetchJSONP(
      `${baseURL}/v2/movie/${movieTypes}?${apikey}&start=${start}&count=${pageSize}&city=广州`
    );
    // let res = await fetchJSONP(
    //   `${baseURL}/v2/movie/top250?${apikey}&start=${start}&count=${pageSize}&city=广州`
    // );
    let data = await res.json();
    // console.log(data);
    this.setState({
      isLoading: false,
      movieList: data.subjects,
      total: data.total
    });
  }
  renderMovieList() {
    if (this.state.isLoading) {
      return (
        <Spin tip="Loading...">
          <Alert
            message="正在请求电影列表"
            description="精彩内容，马上呈现。。。"
            type="info"
          />
        </Spin>
      );
    } else {
      return (
        <div>
          <div className="movie_list">
            {this.state.movieList.map(item => {
              return (
                <Card
                  key={item.id}
                  hoverable
                  cover={<img alt={item.title} src={item.images.small} />}
                  onClick={this.goDetail.bind(this, item.id)}
                >
                  <h2>{item.title}</h2>
                  <p>电影类型：{item.genres.join()}</p>
                  <p>上映年份：{item.year}</p>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={Math.floor(item.rating.average) / 2}
                  />
                </Card>
              );
            })}
          </div>
          <Pagination
            defaultCurrent={this.state.currentPage}
            pageSize={this.state.pageSize}
            total={this.state.total}
            onChange={this.handleChange.bind(this)}
          />
        </div>
      );
    }
  }
  async componentWillReceiveProps(nextProps) {
    // console.log(nextProps.match);
    this.setState(
      {
        isLoading: true,
        currentPage: +nextProps.match.params.page || 1,
        movieTypes: nextProps.match.params.movieTypes
      },
      () => {
        this.getMovieList();
      }
    );
  }
  handleChange(page) {
    this.props.history.push(`/movie/${this.state.movieTypes}/${page}`)
  }
  goDetail(id) {
    this.props.history.push(`/movie/detail/${id}`) 
  }
}

export default MovieList;
