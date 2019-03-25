import React, {Component} from 'react'
import MyPatterns from './MyPatterns'
import {Route, Link} from 'react-router-dom'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            patterns: this.props.myPatterns
        }
        this.listPatterns=this.listPatterns.bind(this)
    }

    listPatterns(){
        let myPatterns=this.props.myPatterns
        return myPatterns.map(pattern=><div className='pattern'><div className='patternTitle'><h2>{pattern.title}</h2></div><div className='patternImage'><img src={pattern.small_image_url} alt='pattern'/></div><div className='patternAuthor'><h3>{pattern.author_name}</h3></div></div>)
    }
    render(){
        return(
            <div className='Dashboard'>
                <div className='DashboardTitle'>
                    <h1>Dashboard</h1>
                </div>
               
                <nav>
                    <Link to='/MyPatterns'>MyPatterns</Link>
                </nav>
                
                {/* {this.listPatterns()} */}
                
                <main>
                    <Route 
                        path='/MyPatterns' 
                        render={(props)=><MyPatterns {...props} listPatternsFn={this.listPatterns}myPatterns={this.state.patterns}/>}
                    />
                </main>

            </div>
        )
    }
}
export default Dashboard