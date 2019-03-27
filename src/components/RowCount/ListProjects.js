import React, {Component} from 'react'

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
        return projects.map(project=><div className='projectCounter'><h3>{project}</h3></div>)
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