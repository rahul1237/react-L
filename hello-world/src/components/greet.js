import React from 'react'

// function greet(){
//     return <h1>Hello this is rahul mahajan</h1>
// }

// export default greet

// const Greet = (props) => {
//    return( <h1>hello this is {props.name}(roll no. : {props.roll_no}) from adgitm!</h1>)
// }



// by destructuring method (into the function parameters)

// const Greet = ({name , roll_no}) => {
//    return( <h1>hello this is {name} (roll no. : {roll_no}) from adgitm</h1>  )
// }


// by destructuring method (into the function body)

const Greet = (props) =>{

   const {name , roll_no} = props
   return(<h1> hello this is {name} (roll no. : {roll_no}) from adgitm</h1>)

}


export default Greet