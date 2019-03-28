import React, {Component} from 'react'


class RowCounter extends Component {
    constructor(props){
        super(props)
        // this.state={
        //     counter:this.props.count,
        // }
        this.decreaseCount=this.decreaseCount.bind(this)
        this.increaseCount=this.increaseCount.bind(this)
    }
    componentDidMount(){
        
    }
    decreaseCount(){
        //pass thru key or ID referring to counter's place in projects array, as arg to 
        //decreaseFn

        this.props.decreaseFn(this.props.id)
        // let count=this.state.counter
        // count--
        // this.setState({counter: count})
        // console.log('decrease', this.state.counter)
    }
    increaseCount(){

        this.props.increaseFn(this.props.id)
        // let count=this.state.counter
        // count++
        // this.setState({counter:count})
        // console.log('increase', this.state.counter)
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