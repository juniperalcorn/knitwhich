import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import '../styles/Measure.css';

class Measure extends Component{

    render(){
        return(
            <div className='measure'>
                <h1>Measure</h1>
                
                <p>2 inches</p>
                <div className='inch-measurement'>
                    <div className='length'>|</div>
                    <div className='height'>--</div>
                </div>

                <p>10 centimeters</p>
                <div className='cm-measurement'>
                    <div className='cm-length'>|</div>
                    <div className='cm-height'>--</div>
                </div>

                <p>measure instructions</p>
            </div>
        )
    }
}
export default Measure