import React, { Component } from 'react'
import Navbar from './Navbar'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=78efd9bf075a475facb403f665cb50f1";
        let data = await fetch(url);
        let parssedData = await data.json();
        this.setState({articles: parssedData.articles})
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                    return <div className="col md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 45):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News