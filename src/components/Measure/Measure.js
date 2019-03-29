import React, {Component} from 'react'

class Measure extends Component{

    render(){
        return(
            <div className='measure'>
                <h2>Measure</h2>

                <p>10 centimeters</p>
                <div className='cm-measurement'>
                    <div className='cm-length'>|</div>
                    <div className='cm-height'>--</div>
                </div>

                <h4>Measurement Instructions</h4>
                <p>Use this 10cm measurement to accurately check your knitting progress!</p>
                <p>1 inch = 2.54 cm</p>
                <p>It is not reccomended to use this to measure gauge, because your knitting will cover the screen. However, you can trace this square onto note paper and make your own ruler, and even add inches to the ruler by building blocks next to each other.</p>
                <p>For thorough gauge instructions, check out this<a href='https://www.wikihow.com/Measure-Knit-Gauge'>Wiki How Page.</a></p>
            </div>
        )
    }
}
export default Measure