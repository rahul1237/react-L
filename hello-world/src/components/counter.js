import React , {Component} from 'react'

class Counter  extends Component{

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increase(){
        this.setState({
            count: this.state.count + 1
        })
    }

    
    decrease(){
        this.setState({
            count: this.state.count - 1
        })
    }

    reset(){
        this.setState({
            count: 0
        })   
    }

    render(){
        return(
            <div>
                <h1>
                    count : {this.state.count}
                </h1>
                <button onClick = { () => this.increase()  }  >increase the value!</button>
                <button onClick = { () => this.decrease()  }  >decrease the value!</button>
                <button onClick = { () => this.reset()  }  >reset the value!</button>
            </div>
        )
    }
}

export default Counter