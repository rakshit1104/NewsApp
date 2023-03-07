import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=78efd9bf075a475facb403f665cb50f1&page=1&pageSize=20";
        let data = await fetch(url);
        let parssedData = await data.json();
        this.setState({ articles: parssedData.articles, totalResults: parssedData.totalResults })
    }

    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=78efd9bf075a475facb403f665cb50f1&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parssedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parssedData.articles
        })
    }

    handleNextClick = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        } else {

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=78efd9bf075a475facb403f665cb50f1&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parssedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parssedData.articles
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col md-4 my-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News