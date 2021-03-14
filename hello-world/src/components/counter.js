import React , {Component} from 'react'

class Counter  extends Component{

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increase(){
        // this.setState({
        //     count: this.state.count + 1
        // } , () => {
        //     console.log('value-1: ',this.state.count);
        // })

        this.setState(prev => ({
            count: prev.count + 1
        }) , () => {
            console.log('value-1: ',this.state.count);
        })

        console.log('value-2: ',this.state.count);
    }
    
    increase2(){
        this.increase()
        this.increase()
    }
    
    decrease(){
        // this.setState({
        //     count: this.state.count - 1
        // } , () => {
        //     console.log('value-1: ',this.state.count);
        // })

        this.setState(prev => ({
            count: prev.count - 1
        }) , () => {
            console.log('value-1: ',this.state.count);
        })

        console.log('value-2: ',this.state.count);
    }
    
    decrease2(){
        this.decrease()
        this.decrease()
    }

    reset(){
        this.setState({
            count: 0
        } , () => {
            console.log('value-1: ',this.state.count);
        })   
        console.log('value-2: ',this.state.count);
    }

    render(){
        return(
            <div>
                <h1>
                    count : {this.state.count}
                </h1>
                <button onClick = { () => this.increase2()  }  >increase the value twice!</button>
                <button onClick = { () => this.increase()  }  >increase the value!</button>
                <button onClick = { () => this.decrease2()  }  >decrease the value twice!</button>
                <button onClick = { () => this.decrease()  }  >decrease the value!</button>
                <button onClick = { () => this.reset()  }  >reset the value!</button>
            </div>
        )
    }
}

export default Counter