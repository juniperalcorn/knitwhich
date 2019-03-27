import React, {Component} from 'react'
import InputProject from './InputProject.js'
import ListProjects from './ListProjects'

class Container extends Component{
    constructor(props){
        super(props)
        this.state={
            projectTitles:['socks','sweater','blanket','scarf'],
        }
        this.updateProjectTitle=this.updateProjectTitle.bind(this)
    }
    updateProjectTitle(input){
        let projTitle=this.state.projectTitles
        projTitle.push(input)
        this.setState({projectTitles:projTitle})
        console.log('updating input:', input)
    }
    render(){
        return(
            <div className='Container'>
                <h2>Project Row Counters</h2>
                <InputProject updateProjectFn={this.updateProjectTitle}/>
                <ListProjects projects={this.state.projectTitles}/>
            </div>
        )
    }
}
export default Container