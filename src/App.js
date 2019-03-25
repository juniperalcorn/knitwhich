import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard.js'
import Tools from './components/Tools.js'
import {Route, Link} from 'react-router-dom'
import MyPatterns from './components/MyPatterns.js'
import Measure from './components/Measure.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      patterns:[],
      usernameInput:'jawdry',
      isLoading: true,
      message: '',
      authUsername:'0caa57646dca474808adf9cd2e8c366a',
      authPassword:'CSH4Rxh0NDYuze7pF9Cl313wLiWzpDXyd1aeoW-S',
    }
    this.getPatterns=this.getPatterns.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  componentDidMount(){
    this.getPatterns()
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
      this.setState({isLoading: true, patterns:jsonData.volumes})
    })
    .catch(error=>this.setState({
      isLoading: false,
      message: 'Still working on ' +error
    }))
  }

  handleSubmit=(username)=>{
    let newUser = username
    this.setState({usernameInput:newUser})
    this.getPatterns()
  }

  render() {
     return (
      <div className="App">
        {/* <nav>
          <h1>nav bar</h1>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/tools'>Tools</Link>
          <h1>end nav bar</h1>
        </nav> */}
        <Navigation patterns={this.state.patterns}/>
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
          <Route path='/measure' component={Measure}/>
        </main>
      </div>
    );
  }
}

export default App;
