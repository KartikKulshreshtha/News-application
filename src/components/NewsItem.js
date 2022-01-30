import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let myStyle = {
            width: '100%',
            height: '200px'
            // -webkit-box-shadow: '-1px -3px 5px -2px rgba(214,214,214,1)'

        }
        let { title, description, imageUrl, url, publishedAt, author, source} = this.props
        return (
            <div>
                <div className="card" style={{ backgroundColor: 'rgb(46 56 76)', color: "#fff"}}> <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:"1"}}>
                    {source}</span>
                    <img src={!imageUrl ? 'https://c.ndtvimg.com/2022-01/1bq59k5s_tesla_625x300_29_January_22.jpg' : imageUrl} className="card-img-top" style={myStyle} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                            {/* <p className="card-text">{description}</p> */}
                            <p class="card-text"><small class="text-muted">Posted by - {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString().slice(0, 25)}</small></p>
                            <p class="card-text"><small class="text-muted">By- {source}</small></p>
                            <a href={url} target="_blank" className="btn btn-sm btn-success" style={{ fontSize: '17px', backgroundColor: "rgb(65 52 84)" }}>Read In Detail...</a>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
