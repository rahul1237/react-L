import React from 'react'

const Clickbtn = () =>{
    
    function clickHandler(){
        console.log('button dabaya gya');
    }

    return(
        <div>
            <button onClick = {clickHandler}> click here</button>
        </div>
    )
}

export default Clickbtn