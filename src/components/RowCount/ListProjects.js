import React, {Component} from 'react'
import RowCounter from './RowCounter'

class ListProjects extends Component{
    constructor(props){
        super(props)
        this.listProjects=this.listProjects.bind(this)
    }
    componentDidMount(){
        this.listProjects()
    }
    listProjects(){
        const {projects}=this.props
        console.log('list projects', projects)
        return projects.map((project, index)=><div className='projectCounter'><h3 key={index}>{project}</h3><RowCounter/></div>)
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