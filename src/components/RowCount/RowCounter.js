import React, {Component} from 'react'


class RowCounter extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:0,
        }
        this.decreaseCount=this.decreaseCount.bind(this)
        this.increaseCount=this.increaseCount.bind(this)
    }
    decreaseCount(){
        let count=this.state.counter
        count--
        this.setState({counter: count})
    }
    increaseCount(){
        let count=this.state.counter
        count++
        this.setState({counter:count})
    }
 
    render(){
        return(
            <div className='rowCounter'>
                <button onClick={this.decreaseCount}>-</button>
                    <h2>{this.state.counter}</h2>
                <button onClick={this.increaseCount}>+</button>
            </div>
        )
    }
}
export default RowCounter