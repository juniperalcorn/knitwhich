# KnitWhich
A Knitting Utilities and Ravelry Extension App: HTML, CSS, JSX, React.<br/>
Take a look at [KnitWhich](https://knitwhich-app.herokuapp.com/).

## Project Description
KnitWhich is a knitting utilities app, which accesses the [Ravelry](https://ravelry.com) API. Ravelry is the world's largest site for knitting, including enormous pattern databases, social networking, business pages, and individual project management tools. 

Rather than attempt to mimic Ravelry's incredible functionality, KnitWhich compliments it and gives users a seamless on-the-go access to their personal Ravelry data, and some additional mobile tools.

From the Ravelry API, KnitWhich lists a user's Ravelry library, and lists the patterns in the "My Patterns" component. Under "Tools," Knitwhich lists a user's knitting needles, previously logged to the Ravelry website.

In addition, KnitWhich offers a Row Counters utility, where users can add and label row counters for different projects, eliminating the need for easily misplaced notions.

### Wireframes
View the [KnitWhich Wireframes](https://drive.google.com/file/d/1hKV2S8epQ7l7rKentwiL8UDEaLZG9ixx/view?usp=sharing).

### MVP and PostMVP
#### MVP 
- Use the Ravelry API to list user's pattern library and knitting needle collection.
- Render API data on different pages using React component structure.
- List row counters for unique projects, labeled by the user, and save accurate row count.

#### PostMVP
KnitWhich has incredible potential to expand, offering a seamless mobile experience of Ravelry's expansive services. 
- Improve row counter functionality: input row number to start, remove counters.
- Add user authorization for any Ravelry user.
- Post new knitting needle data to API using forms. 
- Display an accurate 10cm measure for projects.

### React Component Hierarchy
From the App, users view the Navigation Bar and site title on every page. Through navigation, users can access a list of their Ravelry patterns, or the Tools page, where they can then select to view the measurement tool, a list of their needles, or access row counters for their projects. The Row Counter page uses three components: an input component for creating a new, labeled counter; a counter component; and a list projects component which maps through labeled counters and generates unique counters.
 App>Navigation<br/>
       >Home<br/>
       >My Patterns<br/>
       >Tools<br/>
            >My Needles<br/>
            >My Row Counters>Form>Counter>List Projects<br/>

### Functional Components
Main functional components are My Patterns, My Needles, and Row Counting components.

### Code Snippet
Below is an example of code from the Row Counter Container component. It is significant for demonstrating the use of local storage in creating and updating row counters. 

- Local storage only accepts and generates data as string. However, my app makes use of arrays and objects to pass data. Therefore to set local storage, I used JSON.stringify, and to pull local storage, JSON.parse.
- Calling on local storage is similar to calling an API, and the request takes time. To make sure that my state is updated and components mounted with necessary data, I implemented async/await calls on my componentDidMount function.
- Note that if nothing has yet been stored, I use a conditional statement so storage will still have a value (an empty array as opposed to null) to allow the page to render.
- I have kept the code for localStorage.clear, commented out, as a placeholder in case storage needs a hard reset.
-Update Project Title is what takes in the data from a new project and creates a new, labeled row counter. Input is lifted from a child component.
-Decrease Count is a function which is passed down to children components, and allows for each counter to have a unique value while maintaining state and storage in the parent component.

  ```async componentDidMount(){
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
      }```
