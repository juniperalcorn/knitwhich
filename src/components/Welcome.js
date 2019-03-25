import React, {Component} from 'react'

class Welcome extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
        }
        // this.handleInput=this.handleInput.bind(this)
        // this.handleSubmit=this.handleSubmit.bind(this)
    }
    // handleInput=(e)=>{
    //     const localValue=e.target.value
    //     this.setState({username:localValue})
    // }
    // handleSubmit(e){
    //     e.preventDefault()
    //     this.props.handleSubmitFn(this.state.username)
    // }
    render(){
        return(
            <div className='Welcome'>
                <h1>KnitWhich</h1>
                {/* <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleInput}
                        type='text' 
                        placeholder='Enter Ravelry Username'
                    />

                    <input 
                        type='submit' 
                        id='submit' 
                        value='Submit'
                    />
                </form> */}
            </div>
        )
    }
}

export default Welcome