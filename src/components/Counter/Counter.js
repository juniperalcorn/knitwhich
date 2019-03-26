import React, {Component} from 'react'
import RowCounter from './RowCounter'

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            counter: [0],
            counterCount:1,
        }
        this.increase=this.increase.bind(this)
        this.decrease=this.decrease.bind(this)
        this.moreCounting=this.moreCounting.bind(this)
    }
    moreCounting(){
        let counting=this.state.counter
        counting.push(0)
        this.setState({counter: counting, counterCount: this.state.counterCount+1})
    }
    increase(id){
        this.setState(prevState=>{
            let newState=prevState.counter.map((element,i)=>{
                if (i===id){
                    element++
                }
                return element
            })
            return {counter: newState}
        })
    }
    decrease(id){
        this.setState(prevState=>{
            let newState=prevState.counter.map((element,i)=>{
                if (i===id){
                    element--
                }
                return element
            })
            return {counter: newState}
        })
    }
    render(){
    let counters=[];
    for (let i=0;i<this.state.counterCount;i++){
        counters.push(
            <RowCounter 
            count={this.state.counter[i]}
            decrease={(id)=>this.decrease(id)}
            increase={(id)=>this.increase(id)}
            counterCount={i}
            />
        )
    }
        let counter=0;
        return(
            <div className = 'counter'>
                {counters}
                <button onClick={this.moreCounting}>Add Row Counter</button>                 
            </div>
        )
    }
}
export default Counter