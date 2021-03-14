import React , {Component} from 'react'

// const Welcome =  (props) => {
//     return(
//         <div>
//             <h1>bye-bye</h1>
//              {props.children}
//         </div>
//     )
// }

class Welcome extends Component{
    render(){
        return(
            <div>
            <h1>
                bye-bye from {this.props.by}
            </h1>
            {this.props.children}
            </div>
        )
    }
} 

export default Welcome