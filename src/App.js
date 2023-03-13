import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div style={{backgroundColor: '#2b3035', color: 'white' }}>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<News key='general' headline= 'Top Headlines' pageSize={8} country = 'in' category = 'general'/>} />
        <Route exact path="/business" element={<News key='business' headline= 'Business Headlines' pageSize={8} country = 'in' category = 'business'/>} />
        <Route exact path="/entertainment" element={<News key='entertainment' headline= 'Entertainment Headlines' pageSize={8} country = 'in' category = 'entertainment'/>} />
        <Route exact path="/health" element={<News key='health' headline= 'Health Headlines' pageSize={8} country = 'in' category = 'health'/>} />
        <Route exact path="/science" element={<News key='science' headline= 'Science Headlines' pageSize={8} country = 'in' category = 'science'/>} />
        <Route exact path="/sports" element={<News key='sports' headline= 'Sports Headlines' pageSize={8} country = 'in' category = 'sports'/>} />
        <Route exact path="/technology" element={<News key='technology' headline= 'Technology Headlines' pageSize={8} country = 'in' category = 'technology'/>} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
