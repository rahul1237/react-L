import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'
import Click from './components/functionclick'
import Clickclass from './components/classclick'
import Eventbind from './components/eventbind'
// import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Welcome by = 'rahul mahajan'>
          <button type='submit'>
            conitnue
          </button>
        </Welcome>
        <Greet name = 'mahajan rahul' roll_no = '002'  />
        <Counter />
        <Message />        
        <Hello college_code = '31'  />
        <Click />
        <br />
        <Clickclass />
        <br />
        <Eventbind />
      </div>
    )
  }
}

export default App;