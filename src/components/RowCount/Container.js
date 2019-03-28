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
        this.decreaseCount=this.decreaseCount.bind(this)
        this.increaseCount=this.increaseCount.bind(this)
    }
    async componentDidMount(){
        // localStorage.clear()
        let storage = localStorage.getItem('projects')
        if (storage===null){
            storage=[]
        } else {
            storage=JSON.parse(storage)
        }   
        await this.setState({projectTitles:storage})
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
        localStorage.setItem('projects', JSON.stringify(this.state.projectTitles))
    }
     decreaseCount(id){
        this.setState(prevState=>{
          let newState = prevState.projectTitles.map((element,i)=>{
            let newCount=element.count
            if(i===id){
              newCount= element.count-1
            }
            return {title:element.title, count:newCount}
          })
          return{
            projectTitles:newState
          }
        })
        localStorage.setItem('projects', JSON.stringify(this.state.projectTitles))
      }
      increaseCount(id){
        this.setState(prevState=>{
          let newState = prevState.projectTitles.map((element,i)=>{
            let newCount=element.count
            if(i===id){
              newCount= element.count+1
            }
            return {title:element.title, count:newCount}
          })
          return{
            projectTitles:newState
          }
        })
        localStorage.setItem('projects', JSON.stringify(this.state.projectTitles))
      }
    render(){
        return(
            <div className='Container'>
                <h2>Project Row Counters</h2>
                <InputProject updateProjectFn={this.updateProjectTitle}/>
                <ListProjects projects={this.state.projectTitles} decreaseFn={(id)=>this.decreaseCount(id)} increaseFn={(id)=>this.increaseCount(id)}/>
            </div>
        )
    }
}
export default Container