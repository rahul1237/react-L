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

        const {by , children} = this.props

        return(
            <div>
            <h1>
                bye-bye from {by}
            </h1>
            {children}
            </div>
        )
    }
} 

export default Welcome