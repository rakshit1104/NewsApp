import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
      this.setState({progress: progress})
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{ backgroundColor: '#2b3035', color: 'white' }}>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News api={process.env.REACT_APP_API} setProgress={this.setProgress} key='general' headline='Top Headlines' pageSize={12} country='in' category='general' />} />
            <Route exact path="/business" element={<News api={process.env.REACT_APP_API} setProgress={this.setProgress} key='business' headline='Business Headlines' pageSize={12} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News api={process.env.REACT_APP_API} setProgress={this.setProgress} key='entertainment' headline='Entertainment Headlines' pageSize={12} country='in' category='entertainment' />} />
            <Route exact path="/health" element={<News api={process.env.REACT_APP_API} setProgress={this.setProgress} key='health' headline='Health Headlines' pageSize={12} country='in' category='health' />} />
            <Route exact path="/science" element={<News api={process.env.REACT_APP_API} setProgress={this.setProgress} key='science' headline='Science Headlines' pageSize={12} country='in' category='science' />} />
            <Route exact path="/sports" element={<News api={process.env.REACT_APP_API} setProgress={this.setProgress} key='sports' headline='Sports Headlines' pageSize={12} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News api={process.env.REACT_APP_API} setProgress={this.setProgress} key='technology' headline='Technology Headlines' pageSize={12} country='in' category='technology' />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
