import React, {Component} from 'react'

class MyStash extends Component{
    constructor(props){
        super(props)
        this.listStash=this.listStash.bind(this)
    }
listStash(){
    let myStash=this.props.stash
    return myStash.map(yarn=><div className='yarn'>{yarn.name}, {yarn.colorway_name}: {yarn.yarn.yardage}</div>)
}
    render(){
        return(
            <div className='MyStash'>
                <h1>My Stash</h1>
                {this.listStash()}
            </div>
        )
    }
}
export default MyStash