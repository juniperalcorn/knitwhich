import React, {Component} from 'react'

class Needles extends Component{
    constructor(props){
        super(props)
        this.listNeedles=this.listNeedles.bind(this)
    }
 listNeedles(){
    let myNeedles=this.props.needles
    return myNeedles.map(needle=><div className='needle'>{needle.needle_type.description} {needle.comment}</div>)
}
    render(){
        return(
            <div className='Needles'>
                <h2>Needle Library</h2>
                {this.listNeedles()}
            </div>
        )
    }
}
export default Needles