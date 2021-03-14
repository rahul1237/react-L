import React , {Component}  from 'react'

class Message extends Component{
    

    // state 
    constructor(){
        super()
        this.state = {
            message: 'welcome, Aliens! :)'
        }
    }

    changeMessage(){
        this.setState({
            message: 'thanks visit again ;)'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button type = 'submit' onClick = { () => this.changeMessage()  }  >subscribe</button>
            </div>
        )
    }
}

export default Message