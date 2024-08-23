import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  apikey = "b0c9a65ef9a55fb151cd9ecc7c2014fe"
  //b0c9a65ef9a55fb151cd9ecc7c2014fe
  state = {
    progress: 0
  };
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}

          />
          <NavBar />
          <Routes>

            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey
            } key="general" pageSize={9} category="general" />} />

            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey
            } key="business" pageSize={9} totalArticlescategory="business" />} />

            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey
            } key="entertainment" pageSize={9} category="entertainment" />} />

            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey
            } key="gen" pageSize={9} category="general" />} />

            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey
            } key="health" pageSize={9} category="health" />} />

            <Route exact path="/sport" element={<News setProgress={this.setProgress} apikey={this.apikey
            } key="sport" pageSize={9} category="sport" />} />

            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey
            } key="science" pageSize={9} category="science" />} />

            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey
            } key="technology" pageSize={9} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

