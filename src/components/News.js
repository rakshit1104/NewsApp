import React, { Component } from 'react'
import Navbar from './Navbar'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div>
                This is a News component
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
        )
    }
}

export default News