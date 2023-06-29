import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Bot from './components/Bot';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      {/* <Bot/> */}
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
