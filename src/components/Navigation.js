import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Welcome from './Welcome'
import Dashboard from './Dashboard'
import Tools from './Tools'
import App from '../App'

class Navigation extends Component {
    render(){
        return(
            <div className='Navigation'>
                <nav>
                    <Link to ='/home'>Home</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/tools'>Tools</Link>
                </nav>

            </div>
        )
    }
}
export default Navigation