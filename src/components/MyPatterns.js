import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import yarn_icon from '../Assets/yarn_icon.png'

class MyPatterns extends Component{
    constructor(props){
        super(props)
        this.listPatterns=this.listPatterns.bind(this)
    }
    listPatterns(){
        let myPatterns=this.props.myPatterns
        return myPatterns.map(pattern=><div className='pattern' key={pattern.id}><div className='patternImage'><img src={pattern.small_image_url} alt='yarn_icon'/></div><div className='patternTitle'><h3>{pattern.title}</h3></div><div className='patternAuthor'><h3>{pattern.author_name}</h3></div></div>)
    }
    render(){
        return(
            <div className='MyPatterns'>
                <h2>My Patterns</h2>
                {this.listPatterns()}
            </div>
        )
    }
}
export default MyPatterns