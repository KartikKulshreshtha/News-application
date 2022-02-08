import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaulProps = {
        category: 'general'
    }
    static propTypes = {
        category: PropTypes.string
    }

    capatilizeWord = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            pageSize: 6,
            totalResults: 0
        }
        document.title = `DekhoNews | ${this.capatilizeWord(this.props.category)}`
    }


    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=860b34ffb785421aa5e09ff7c5c99c44&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=860b34ffb785421aa5e09ff7c5c99c44&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    }
    render() {
        return (
            <>
                <h2 className='my-5 text-center text-light'>DekhoNews - Top {this.capatilizeWord(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
