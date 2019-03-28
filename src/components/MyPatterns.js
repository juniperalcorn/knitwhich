import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Photo from '../Assets/yarn_icon.png'
//photo from vecteezy

class MyPatterns extends Component{
    constructor(props){
        super(props)

        this.listPatterns=this.listPatterns.bind(this)
    }
    listPatterns(){
        let myPatterns=this.props.myPatterns
        return myPatterns.map(pattern=><div className='pattern' key={pattern.id}><div className='patternImage'><img src={pattern.small_image_url || Photo} alt='yarn icon'/></div><div className='patternTitle'>{pattern.title}</div><div className='patternAuthor'>{pattern.author_name}</div></div>)
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