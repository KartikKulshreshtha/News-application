import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaulProps = {
        category: 'general'
    }
    static propTypes = {
        category: PropTypes.string
    }
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 6,
        }
    }


    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=860b34ffb785421aa5e09ff7c5c99c44&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ 
            articles: parsedData.articles,
            loading: false 
        })
    }
    
    async componentDidMount() {
        this.updateNews();
    }

    handlePrev = async ()=>{
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }
    handleNext = async ()=>{
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='my-5 text-center text-light'>DekhoNews - Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                <h4 className='text-center text-light'>{`Page - ${this.state.page}`}</h4>
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page === 1} onClick={this.handlePrev} id='Prev' type="button" className="btn btn-primary"> &larr; Previous</button>
                <button onClick={this.handleNext} id='Next' type="button" className="btn btn-primary">Next &rarr;</button>

                </div>
            </div>
        )
    }
}

export default News
