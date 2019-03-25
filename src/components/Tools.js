import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Measure from './Measure'

class Tools extends Component {
    render(){
        return(
            <div className='Tools'>
                <h1>Tools</h1>
                <Link to='/measure'>Measure</Link>

                <main>
                    <Route path='/measure' component={Measure}/>
                </main>
            </div>
        )
    }
}
export default Tools