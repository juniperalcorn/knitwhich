import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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