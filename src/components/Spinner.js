import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img style={{height:"50px"}} src={loading} alt="loading gif" />
            </div>
        )
    }
}

export default Spinner