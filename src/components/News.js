import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2021-12-29&sortBy=publishedAt&apiKey=860b34ffb785421aa5e09ff7c5c99c44";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })

    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='my-5 text-center text-light'>DekhoNews - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} url={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
