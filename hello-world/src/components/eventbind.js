import React , {Component} from 'react'

class Eventbind extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            message: 'hello'
        }

        // for 3rd/better approach
        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'goodbye'
    //     })
    //     console.log(this);
    // }


    // for 4th/best approach

    clickHandler = () =>{
        this.setState({
            message:'goodbye'
        })
    }

    render(){
        return(
            <div>
                {this.state.message}
                
                {/* naive approach  */}
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
                
                {/* somewhat better approach */}
                {/* <button onClick = {() => this.clickHandler()}>Click</button> */}

                {/* better approach */}
                {/* <button onClick = {this.clickHandler}>click me</button> */}
                
                {/* best approach */}
                <button onClick = {this.clickHandler}>click me</button>

            </div>
        )
    }
}

export default Eventbind 