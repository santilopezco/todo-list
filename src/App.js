import React from 'react';
import './App.scss';
import Container from './components/Container.jsx'

function App() {
  return (
    <div className='App'>
      <div>
        <h1>Lunes</h1>
        <Container/>
      </div>
      <div>
        <h1>Martes</h1>
        <Container/>
      </div>
      <div>
        <h1>Miercoles</h1>
        <Container/>
      </div>
      <div>
        <h1>Jueves</h1>
        <Container/>
      </div>
      <div>
        <h1>Viernes</h1>
        <Container/>
      </div>       
    </div>
  );
}




export default App;

