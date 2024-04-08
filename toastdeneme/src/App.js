import React from 'react';
import './App.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
 

function App(){
  var notyf = new Notyf();

  const tiklabakalim = ( ) =>  {
    notyf.error({
      message: 'Accept the terms before moving forward',
      duration: 2000,
      icon: false
    })
  }
     
  return (
    <div className="App">          
    <button onClick={tiklabakalim}>Tikla Bakalim</button> 
    </div>
  );

  }
  

export default App;
