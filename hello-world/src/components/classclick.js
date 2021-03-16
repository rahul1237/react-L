import React , {Component} from 'react'

class Classclick extends Component{
    clickHandler(){
        console.log('dusra bhi dba dia');
    }
    render(){
        return(
            <div>
                <button onClick = {this.clickHandler}>
                    click again
                </button>
            </div>
        )
    }
}

export default Classclick