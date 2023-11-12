import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TopButton from "./components/TopButton";
import ProgressBar from "./components/ProgressBar";

function App() {
    return (
        <div>
            <ProgressBar />
            <Navbar />
            <TopButton />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
