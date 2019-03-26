import React, {Component} from 'react'
import { NONAME } from 'dns';

class RowCounter extends Component {
    constructor(props){
        super(props)
        this.state={
            projectTitle:''
        }
        this.decreaseCount=this.decreaseCount.bind(this)
        this.increaseCount=this.increaseCount.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    decreaseCount(){
        this.props.decrease(this.props.counterCount)
    }
    increaseCount(){
        this.props.increase(this.props.counterCount)
    }
    handleChange(e){
        let input=e.target.value
        this.setState({projectTitle:input})
    }
    handleSubmit(e){
        e.preventDefault()
    }
 
    render(){
        let counter=this.props.count
        return(
            <div className='rowCounter'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Project Title'
                    />
                    <button type='submit'>Submit</button>
                </form>
                <div className='singleRowCounter'>
                    <p>{this.state.projectTitle}</p>

                    <button onClick={this.decreaseCount}>-</button>
                        {counter}
                    <button onClick={this.increaseCount}>+</button>
                </div>
            </div>
        )
    }
}
export default RowCounter