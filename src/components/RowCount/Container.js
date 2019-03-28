import React, {Component} from 'react'
import InputProject from './InputProject.js'
import ListProjects from './ListProjects'

class Container extends Component{
    constructor(props){
        super(props)
        this.state={
            projectTitles:[],
            projectCounters:[],
        }
        this.updateProjectTitle=this.updateProjectTitle.bind(this)
        // this.parseStorage=this.parseStorage.bind(this)
    }
    componentDidMount(){
        // localStorage.clear()
        let storage = localStorage.getItem('projects')
        if (storage===null){
            storage=[]
        } else {
            let newStorage = JSON.parse(storage)
            this.setState({projectTitles:newStorage})
        }
    }
    updateProjectTitle(input){
        let addProject=this.state.projectTitles
        let projArray=[input]
        let projCounter=projArray.map(element=>{
            const projContainer={}
            projContainer ['title'] =element
            projContainer['count']=0
            return projContainer
        })
        addProject.push(projCounter[0])
        this.setState({projectTitles:addProject})
        console.log('project titles', this.state.projectTitles)
       localStorage.setItem('projects', JSON.stringify(this.state.projectTitles))
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