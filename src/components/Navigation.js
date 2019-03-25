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
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/tools'>Tools</Link>
                </nav>

                <main>
                    <Route path='/dashboard' 
                    render={(props)=><Dashboard {...props} myPatterns={this.props.patterns}/>}
                    />
                    <Route path='/tools' component={Tools}/>
                </main>
            </div>
        )
    }
}
export default Navigation