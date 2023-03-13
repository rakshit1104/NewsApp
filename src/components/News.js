import React, { Component } from 'react'
import NewsItem from './NewsItem'
import newspic from './newspic.jpg'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78efd9bf075a475facb403f665cb50f1&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parssedData = await data.json();
        this.setState({
            articles: parssedData.articles,
            totalResults: parssedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78efd9bf075a475facb403f665cb50f1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parssedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parssedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78efd9bf075a475facb403f665cb50f1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parssedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parssedData.articles,
                loading: false
            })
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                {this.state.loading && < Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col md-4 my-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage ? element.urlToImage : newspic} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News