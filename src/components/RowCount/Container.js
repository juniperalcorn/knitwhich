import React, {Component} from 'react'

class Container extends Component{
    constructor(props){
        super(props)
        this.state={
            counterCount:[],
        }
    }
    render(){
        return(
            <h1>container test</h1>
        )
    }
}
export default Container