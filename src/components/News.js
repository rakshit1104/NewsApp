import React, { Component } from 'react'
import Navbar from './Navbar'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>This is a News component</h2>
                <div className="row">
                    <div className="col md-4">
                        <NewsItem title="Title1" description="Description of Title1" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" />
                    </div>
                    <div className="col md-4">
                        <NewsItem title="Title2" description="Description of Title2" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" />
                    </div>
                    <div className="col md-4">
                        <NewsItem title="Title3" description="Description of Title3" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" />
                    </div>

                </div>
            </div>
        )
    }
}

export default News