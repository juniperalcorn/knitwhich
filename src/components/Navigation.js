import React, {Component} from 'react'
import {Link} from 'react-router-dom'

function Navigation(){
        return(
            <div className='Navigation'>
                <nav>
                    <Link to ='/'>Home</Link>
                    <Link to='/MyPatterns'>My Patterns</Link>
                    <Link to='/tools'>Tools</Link>
                </nav>
            </div>
        )
    }
export default Navigation