import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import newspic from './newspic.jpg'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        (async () => {
            props.setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=1&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parssedData = await data.json();
            setArticles(parssedData.articles);
            setTotalResults(parssedData.totalResults);
            setLoading(false);
            props.setProgress(100);

        })();
    }, [])

    const handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parssedData = await data.json();

        setPage(page - 1);
        setArticles(parssedData.articles);
        setLoading(false);
    }

    const handleNextClick = async () => {

        if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parssedData = await data.json();

            setPage(page + 1);
            setArticles(parssedData.articles);
            setLoading(false);
        }
    }
    return (
        <>
            <div className="container my-3">
                <h2>{props.headline}</h2>
                {loading && < Spinner />}
                <div className="row">
                    {!loading && articles.map((element) => {
                        return <div className="col md-4 my-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) + "..." : ""} description={element.description ? element.description.slice(0, 65) + "..." : ""} imageUrl={element.urlToImage ? element.urlToImage : newspic} newsUrl={element.url} newsSource={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
}


News.defaultProps = {
    country: 'in',
    pageSize: 8
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}
