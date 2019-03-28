import React, {Component} from 'react'
import RowCounter from './RowCounter'
import { timingSafeEqual } from 'crypto';

class ListProjects extends Component{
    constructor(props){
        super(props)
        this.state={
            newCount:0,
        }
        this.listProjects=this.listProjects.bind(this)
    }
    componentDidMount(){
        this.listProjects()
    }
    listProjects(){
        const {projects}=this.props
        return projects.map((project, index)=><div className='projectCounter'><h3 key={index}>{project}</h3><RowCounter newCount={this.state.newCount}/></div>)
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