import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard.js'
import Tools from './components/Tools.js'
import {Route, Link} from 'react-router-dom'
import MyPatterns from './components/MyPatterns.js'
import Measure from './components/Measure.js'
import Needles from './components/Needles.js'
import MyStash from './components/MyStash.js'
import { timingSafeEqual } from 'crypto';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      patterns:[],
      usernameInput:'jawdry',
      needles:[],
      stash:[],
      authUsername:'0caa57646dca474808adf9cd2e8c366a',
      authPassword:'CSH4Rxh0NDYuze7pF9Cl313wLiWzpDXyd1aeoW-S',
    }
    this.getPatterns=this.getPatterns.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.getStash=this.getStash.bind(this)
    this.getNeedles=this.getNeedles.bind(this)
  }
  componentDidMount(){
    this.getPatterns()
    this.getNeedles()
  }
 
  getPatterns(){
    let url = `https://api.ravelry.com/people/${this.state.usernameInput}/library/search.json`
    fetch(url, {
      method: 'GET',
      headers:{
        'Authorization': 'Basic ' + btoa(this.state.authUsername+':'+this.state.authPassword),
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
  getStash(){
    let url = `https://api.ravelry.com/people/jawdry/stash/list.json`
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
      this.setState({stash:jsonData.stash})
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
        <Welcome handleSubmitFn={this.handleSubmit}/>

        <main>
          <Route
              path='/'
          />
          <Route 
              path='/tools' 
              component={Tools}
          />
          <Route 
              path='/dashboard' 
              render={(props)=><Dashboard {...props} 
                patterns={this.state.patterns}/>}
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
              path='/mystash'
              render={(props)=><MyStash {...props}
              stash={this.state.stash}
              />}
          />
        </main>
      </div>
    );
  }
}

export default App;
