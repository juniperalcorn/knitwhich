import React, {Component} from 'react'
import RowCounter from './RowCounter'

class ListProjects extends Component{
    constructor(props){
        super(props)
        this.state={
        }
        this.listProjects=this.listProjects.bind(this)
    }
    componentDidMount(){
        this.listProjects()
    }

    listProjects(){
        const {projects}=this.props
        return projects.map((project, index)=>
            <div className='projectCounter' key={index}><h3>{project[0].title}</h3>
            <RowCounter count={project[0].count}/>
            </div>)
    }
    render(){
        return(
            <div className='ProjectList'>
                {this.listProjects()}
            </div>
        )
    }
}
export default ListProjects