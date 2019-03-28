import React, {Component} from 'react'


class RowCounter extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:this.props.count,
        }
        this.decreaseCount=this.decreaseCount.bind(this)
        this.increaseCount=this.increaseCount.bind(this)
    }
    componentDidMount(){
        // let countStore=localStorage.getItem('count')
        // this.setState({counter:countStore})
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