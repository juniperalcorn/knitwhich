import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import Dashboard from './components/Dashboard.js'

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
    // this.listPatterns=this.listPatterns.bind(this)
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
    this.setState({usernameInput:username})
    this.getPatterns()
  }
  // listPatterns(){
  // let myPatterns=this.state.patterns  
  //   return myPatterns.map(pattern=><div className='pattern'><div className='patternTitle'><h2>{pattern.title}</h2></div><div className='patternImage'><img src={pattern.small_image_url}/></div><div className='patternAuthor'><h3>{pattern.author_name}</h3></div></div>)
  // }
  render() {
 
    // let myPatterns=this.state.patterns
    // let listPatterns=myPatterns.map(pattern=><div><h2>{pattern.title}</h2><p><img src={pattern.small_image_url}/></p></div>)
    return (
      <div className="App">
        <Welcome handleSubmitFn={this.handleSubmit}/>
        <Dashboard listFn={this.listPatterns}/>
      </div>
    );
  }
}

export default App;
