import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let myStyle = {
            width: '100%', 
            height: '200px'
            // -webkit-box-shadow: '-1px -3px 5px -2px rgba(214,214,214,1)'

        }
        let {title, description, imageUrl, url} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem", backgroundColor: 'rgb(46 56 76)', color: "#fff"}}>
                    <img src={!imageUrl?'https://c.ndtvimg.com/2022-01/1bq59k5s_tesla_625x300_29_January_22.jpg':imageUrl} className="card-img-top" style={myStyle} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} target="_blank" className="btn btn-sm btn-outline-success" style={{fontSize: '17px'}}>News Details</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
