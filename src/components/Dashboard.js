import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='Dashboard'>
                <div className='DashboardTitle'>
                    <h1>Dashboard</h1>
                </div>
               
                <nav>
                    <Link to='/MyPatterns'>My Patterns</Link>
                    {/* <Link to='/mystash'>My Stash</Link> */}
                </nav>
                
            </div>
        )
    }
}
export default Dashboard