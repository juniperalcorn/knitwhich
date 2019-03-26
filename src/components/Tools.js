import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

class Tools extends Component {
    render(){
        return(
            <div className='Tools'>
                <h1>Tools</h1>
                <Link to='/measure'>Measure</Link>
                <Link to='/needles'>My Needles</Link>
                <Link to='/counter'>Row Counter</Link>
            </div>
        )
    }
}
export default Tools