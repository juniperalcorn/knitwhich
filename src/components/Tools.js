import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

class Tools extends Component {
    render(){
        return(
            <div className='Tools'>
                <h2>Tools</h2>
                <Link to='/measure'>Measure</Link>
                <Link to='/needles'>My Needles</Link>
                {/* <Link to='/counter'>Row Counter</Link> */}
                <Link to='/rowCount'>My Row Counters</Link>
            </div>
        )
    }
}
export default Tools