import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import Navigation from './components/Navigation'
import Tools from './components/Tools.js'
import {Route, Link} from 'react-router-dom'
import MyPatterns from './components/MyPatterns.js'
import Measure from './components/Measure/Measure.js'
import Needles from './components/Needles.js'
import Container from './components/RowCount/Container.js'
// import {REACT_APP_BASIC_AUTH_PASSWORD, REACT_APP_BASIC_AUTH_USERNAME} from 'dotenv'
require('dotenv').config()

const authUsername= process.env.REACT_APP_BASIC_AUTH_USERNAME
const authPassword= process.env.REACT_APP_BASIC_AUTH_PASSWORD

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      patterns:[],
      needles:[],
      stash:[],
      authUsername: authUsername,
      authPassword: authPassword
    }
    this.getPatterns=this.getPatterns.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.getNeedles=this.getNeedles.bind(this)
  }
  componentDidMount(){
    this.getPatterns()
    this.getNeedles()
  }
 
  getPatterns(){
    let url = `https://api.ravelry.com/people/jawdry/library/search.json`
    fetch(url, {
      method: 'GET',
      headers:{
        'Authorization': 'Basic ' + btoa(authUsername+':'+authPassword),
      }
    })
    .then(response=>{
      return response.json()
      })
    .then(jsonData=>{
      this.setState({patterns:jsonData.volumes})
    })
  }
  getNeedles(){
    let url=`https://api.ravelry.com/people/jawdry/needles/list.json`
    fetch(url,{
      method: 'GET',
      headers:{
        'Authorization': 'Basic ' + btoa(this.state.authUsername+':'+this.state.authPassword),
      }
    })
    .then(response=>{
      return response.json()
    })
    .then(jsonData=>{
      this.setState({needles:jsonData.needle_records})
    })
  }

  handleSubmit=(username)=>{
    let newUser = username
    this.setState({usernameInput:newUser})
    this.getPatterns()
    this.getStash()
  }

  render() {
     return (
      <div className="App">
        <Navigation />
        <Welcome />

        <main>
          <Route
              path='/'
          />
          <Route 
              path='/tools' 
              component={Tools}
          />
          <Route 
              path='/MyPatterns' 
              render={(props)=><MyPatterns {...props} 
                  listPatternsFn={this.listPatterns} 
                  myPatterns={this.state.patterns}/>}
          />
          <Route 
              path='/measure' 
              component={Measure}
          />
          <Route 
              path='/needles' 
              render={(props)=><Needles {...props} 
              needles={this.state.needles}/>}
          />
          <Route 
              path='/rowCount'
              component={Container}
          />
        </main>
      </div>
    );
  }
}

export default App;
