import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  const [name, setName] = useState('About')
  function changeName () {
    if (name === 'About') {
      return <About/>
    }
    if (name === 'Contact') {
      return <Contact/>
    }
    if (name === 'Portfolio') {
      return <Portfolio/>
    }

  }
  return (
    <div className="App">
      <Header setName ={setName}/>
{changeName()}
      {/* <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
      <input onChange={(e)=>setName(e.target.value)} />  */}
      <Footer/>
    </div>
  );
}

export default App;

