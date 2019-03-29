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
        this.props.decreaseFn(this.props.id)
    }
    increaseCount(){
        this.props.increaseFn(this.props.id)
    }
    render(){
        return(
            <div className='rowCounter'>
                <button onClick={this.decreaseCount}>-</button>
                    <h2>{this.props.count}</h2>
                <button onClick={this.increaseCount}>+</button>
            </div>
        )
    }
}
export default RowCounter