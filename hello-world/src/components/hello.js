import React from 'react'

const Hello = (props) => {
    
    // class components with JSX
    return(
        <div>
            <h2>
                northern india engineering college. ({props.college_code})
            </h2>
        </div>
    )

    // class components without JSX
    // return React.createElement('div',null,React.createElement('h3',null,"i'm from ghaziabad"))
    // createElement takes 3 parameters:
        //  1. attribute
        //  2. id,class as key-value pair
        //  3. text inside the html attributes
}

export default Hello