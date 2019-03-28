import React, {Component} from 'react'

class InputProject extends Component{
    constructor(props){
        super(props)
        this.state={
            projectTitle:'',
            counter:0,
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleCreate=this.handleCreate.bind(this)
    }
    handleChange(e){
        let input=e.target.value
        this.setState({projectTitle:input})
    }
    handleCreate(e){
        e.preventDefault()
        const {updateProjectFn} = this.props
        updateProjectFn(this.state.projectTitle)
    }
    render(){
        return(
            <div className='ProjectInput'>
                <form>
                    <input
                    onChange={this.handleChange}
                    type='text'
                    placeholder='New Project Title'
                    />
                    <button 
                    onClick={this.handleCreate}
                    >Create New Project</button>
                </form>
            </div>
        )
    }
}
export default InputProject