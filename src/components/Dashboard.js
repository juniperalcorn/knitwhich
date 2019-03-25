import React, {Component} from 'react'

class Dashboard extends Component{
    render(){
        return(
            <div className='Dashboard'>
                <h1>test</h1>
                {this.props.list}
            </div>
        )
    }
}
export default Dashboard