import React from 'react'

// function greet(){
//     return <h1>Hello this is rahul mahajan</h1>
// }

// export default greet

const Greet = (props) => {
   return( <h1>hello this is {props.name}(roll no. : {props.roll_no}) from adgitm!</h1>)
}

export default Greet