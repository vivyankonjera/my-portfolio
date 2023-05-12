import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TopButton from './components/TopButton';

function App() {
  return (
    <div >
      <Navbar/>
      <TopButton/>
      <Introduction/>
      <About/>
      <Experience/>
      <Projects/> 
      <Contact/>  
    </div>
  );
}

export default App;
