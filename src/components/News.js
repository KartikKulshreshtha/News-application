import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const capatilizeWord = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const [totalResults, setTotalResults] = useState(0);
    document.title = `DekhoNews | ${capatilizeWord(props.category)}`

    

    const updateNews = async () => {
        props.setProgress(50);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=860b34ffb785421aa5e09ff7c5c99c44&page=${page}&pageSize=${pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }


    useEffect(() => {
        updateNews();
    }, [])
    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=860b34ffb785421aa5e09ff7c5c99c44&page=${page}&pageSize=${pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }
    return (
        <>
            <h2 className='my-5 text-center text-light'>DekhoNews - Top {capatilizeWord(props.category)} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {!loading && articles.map((element) => {
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

News.defaulProps = {
    category: 'general'
}
News.propTypes = {
    category: PropTypes.string
}


export default News
