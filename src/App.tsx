import React from 'react';
import Hello from './components/Hello';

function App() {


  return (
    <div className="App">
      <h1>HELLO REACT TYPESCRİPT</h1>
      <Hello  name={'sadada'} onSmthHappen={(name)=> {console.log(name)}} />
    </div>
  );
}

export default App;
