import React, { Component } from 'react'

export default function NewsItem(props) {
    let { title, description, newsSource, imageUrl, newsUrl } = props;
    return (
        <div>
            <div className="card" style={{ width: '18rem', backgroundColor: '#2b3035', color: 'white', border: '4px solid white' }}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-white" >Source: {newsSource}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-secondary">More details</a>
                </div>
            </div>
        </div>
    )
}
