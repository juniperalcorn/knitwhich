# KnitWhich
A Knitting Utilities and Ravelry Extension App: HTML, CSS, JSX, React
Take a look at [KnitWhich](https://knitwhich-app.herokuapp.com/).

## Project Description
KnitWhich is a knitting utilities app, which accesses the [Ravelry](https://ravelry.com) API. Ravelry is the world's largest site for knitting, including enormous pattern databases, social networking, business pages, and individual project management tools. 

Rather than attempt to mimic Ravelry's incredible functionality, KnitWhich compliments it and gives users a seamless on-the-go access to their personal Ravelry data, and some additional mobile tools.

From the Ravelry API, KnitWhich lists a user's Ravelry library, and lists the patterns in the "My Patterns" component. Under "Tools," Knitwhich lists a user's knitting needles, previously logged to the Ravelry website.

In addition, KnitWhich offers two utilities: an accurate 10cm x 10cm ruler (accurate on mobile, tablet, and computer screens). This helps knitters to keep track of their progress or create their own ruler on the fly. There is also a Row Counters component, where users can add and label row counters for different projects, eliminating the need for easily misplaced notions.

### Wireframes

### MVP and PostMVP
#### MVP 
- Use the Ravelry API to list user's pattern library and knitting needle collection.
- Render API data on different pages using React component structure.
- Display an accurate 10cm measure for projects.
- List row counters for unique projects, labeled by the user, and save accurate row count

#### PostMVP
KnitWhich has incredible potential to expand, offering a seamless mobile experience of Ravelry's expansive services. 
- Add user authorization for any Ravelry user.
- Post new knitting needle data to API using forms. 

### React Component Hierarchy
From the App, users view the Navigation Bar and site title on every page. Through navigation, users can access a list of their Ravelry patterns, or the Tools page, where they can then select to view the measurement tool, a list of their needles, or access row counters for their projects. The Row Counter page uses three components: an input component for creating a new, labeled counter; a counter component; and a list projects component which maps through labeled counters and generates unique counters.
App>Navigation
        >Home
        >My Patterns
        >Tools  
            >Measure
            >My Needles
            >My Row Counters
                >Form
                >Counter
                >List Projects

### Functional Components
Main functional components are My Patterns, My Needles, and Row Counting components.

### Helper Functions

### Code Snippet
Below is an example of code from the Row Counter Container component. It is significant for demonstrating the use of local storage in creating and updating row counters. Note that local storage is set in the lower function, and called in componentDidMount. ComponentDidMount utilizes a conditional statement to make sense of the storage data for React: if nothing has been stored yet, it is set to an empty array so that the page will render without an error. If previous data is being called up, it is produced as a single string--therefore the string split method converts the stored data into an array which can be accurately mapped on the List Projects component. ComponentDidMount also contains the localstorage "clear" function as commented out--not deleted--code in case storage needs a hard reset. 

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

### User Stories