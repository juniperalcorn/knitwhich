import React, {Component} from 'react'
import MyPatterns from './MyPatterns'
import {Route, Link} from 'react-router-dom'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.listPatterns=this.listPatterns.bind(this)
    }
    // componentDidMount(){
    //     this.listPatterns()
    // }
    listPatterns(){
        let myPatterns=this.props.patterns
        return myPatterns.map(pattern=><div className='pattern'><div className='patternTitle'><h2>{pattern.title}</h2></div><div className='patternImage'><img src={pattern.small_image_url}/></div><div className='patternAuthor'><h3>{pattern.author_name}</h3></div></div>)
    }
    render(){
        return(
            <div className='Dashboard'>
                <div className='DashboardTitle'>
                    <h1>Dashboard</h1>
                </div>
                {this.listPatterns()}
                <nav>
                    <Link to='/MyPatterns'>MyPatterns</Link>
                    <Link to ='/tools'>Tools</Link>
                </nav>

                <main>
                    <Route 
                        path='/MyPatterns' 
                        render={(props)=><MyPatterns {...props} myPatterns={this.props.patterns}/>}/>
                </main>

            </div>
        )
    }
}
export default Dashboard