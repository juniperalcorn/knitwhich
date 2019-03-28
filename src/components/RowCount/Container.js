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
        console.log('state on load', this.state.projectTitles)
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
     decreaseCount(id){
        this.setState(prevState=>{
          let newState = prevState.count.map((element,i)=>{
            if(i===id){
              element= element-1
            }
            return element
          })
          return{
            count:newState
          }
        })
      }
      increaseCount(id){
        this.setState(prevState=>{
          let newState = prevState.count.map((element,i)=>{
            if(i===id){
              element= element+1
            }
            return element
          })
          return{
            count:newState
          }
        })
      }
    render(){
        return(
            <div className='Container'>
                <h2>Project Row Counters</h2>
                <InputProject updateProjectFn={this.updateProjectTitle}/>
                <ListProjects projects={this.state.projectTitles} decreaseFn={this.decreaseCount} increaseFn={this.increaseCount}/>
            </div>
        )
    }
}
export default Container