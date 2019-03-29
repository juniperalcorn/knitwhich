import React, {Component} from 'react'
import {Link} from 'react-router-dom'

function Tools () {
        return(
            <div className='Tools'>
                <h2>Tools</h2>
                <Link to='/measure'>Measure</Link>
                <Link to='/needles'>My Needles</Link>
                <Link to='/rowCount'>My Row Counters</Link>
            </div>
        )
    }
export default Tools