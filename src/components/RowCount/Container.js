import React, {Component} from 'react'
import InputProject from './InputProject.js'
import ListProjects from './ListProjects'

class Container extends Component{
    constructor(props){
        super(props)
        this.state={
            projectTitles:[],
        }
        this.updateProjectTitle=this.updateProjectTitle.bind(this)
    }
    componentDidMount(){
        // localStorage.clear()
        let storage = localStorage.getItem('projectTitles')
        if (storage===null){
            storage=[]
        } else {
            let returnStorage = storage.split(',')
            this.setState({projectTitles:returnStorage})
        }
    }
    updateProjectTitle(input){
        let projTitle=this.state.projectTitles
        projTitle.push(input)
        this.setState({projectTitles:projTitle})
        localStorage.setItem('projectTitles', this.state.projectTitles)
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