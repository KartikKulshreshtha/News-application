import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2 className='my-5 text-center'>DekhoNews - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="News Item 1" description="description of news item 1" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="News Item 1" description="description of news item 1" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="News Item 1" description="description of news item 1" />
                    </div>
                    <div className="col-md-4 my-3">
                        <NewsItem title="News Item 1" description="description of news item 1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
