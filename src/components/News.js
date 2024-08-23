import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      pageSize: 9,
      totalResults: 0,
      page: 1
    }
    document.title = `Daily Bugle | ${this.capitalized(this.props.category)}`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb0c0d3ccf1841f5848e1fa9176b0dde&page=${this.state.page}&pagesize=$pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parsedData.articles });
    this.setState({
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb0c0d3ccf1841f5848e1fa9176b0dde&page=${this.state.page + 1}&pagesize=$pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })

  }

  render() {
    return (
      <>
        <h1 className="text-center text-white " style={{marginTop: '90px'}}>Daily Bugle Top-headlines | Results: {this.state.totalResults} | Category:  {this.props.category} {this.state.articles.length}</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className='row'>
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4 my-3" key={e.url} >
                    <Newsitems
                      title={e.title ? e.title : ""}
                      description={e.description ? e.description : ""}
                      imageurl={e.image}
                      newsurl={e.urlToImage}
                      date={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        </>
    )
  }
}

export default News