import React from 'react'

const NewsItem = (props)=>{
        let myStyle = {
            width: '100%',
            height: '200px'
        }
        let { title, imageUrl, url, publishedAt, author, source} = props
        return (
            <div>
                <div className="card rounded-3" style={{ backgroundColor: 'rgb(46 56 76)', color: "#fff"}}> 
                <div style={{position: 'absolute', display: 'flex', right: '0', justifyContent: 'flex-end'}}>
                <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                    <img src={!imageUrl ? 'https://cdn.pixabay.com/photo/2016/10/06/19/59/sign-1719892_960_720.png' : imageUrl} className="card-img-top" style={myStyle} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                            {/* <p className="card-text">{description}</p> */}
                            <p className="card-text"><small className="text-muted">Posted by - {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString().slice(0, 25)}</small></p>
                            <p className="card-text"><small className="text-muted">By- {source}</small></p>
                            <a href={url} target="_blank" className="btn btn-sm btn-success" style={{ fontSize: '17px', backgroundColor: "rgb(6 3 7)" }}>Read In Detail &rarr;</a>

                    </div>
                </div>
            </div>
        )
}

export default NewsItem
