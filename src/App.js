import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import Dashboard from './components/Dashboard.js'
import {Route, Link} from 'react-router-dom'

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
    console.log('patterns', this.state.patterns)
  }

  render() {
     return (
      <div className="App">
        <Welcome handleSubmitFn={this.handleSubmit}/>
        <nav>
          <Link to='/dashboard'>Dashboard</Link>
        </nav>

        <main>
          <Route path='/dashboard' render={(props)=><Dashboard {...props} patterns={this.state.patterns}/>}/>
        </main>
      </div>
    );
  }
}

export default App;
