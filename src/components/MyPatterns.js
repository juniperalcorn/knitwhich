import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

class MyPatterns extends Component{
    constructor(props){
        super(props)
        this.listPatterns=this.listPatterns.bind(this)
    }
    // componentDidMount(){
    //     this.listPatterns()
    // }
    listPatterns(){
        let myPatterns=this.props.myPatterns
        return myPatterns.map(pattern=><div className='pattern'><div className='patternTitle'><h2>{pattern.title}</h2></div><div className='patternImage'><img src={pattern.small_image_url} alt='pattern'/></div><div className='patternAuthor'><h3>{pattern.author_name}</h3></div></div>)
    }
    render(){
        return(
            <div className='MyPatterns'>
                <p>Anything at all</p>
                {this.listPatterns()}
            </div>
        )
    }
}
export default MyPatterns