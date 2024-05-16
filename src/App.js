import { Navbar } from "./components/navbar/Navbar";
import { Intro } from './components/intro/Intro';
import { Experience } from './components/experience/Experience';
import { Portfolio } from "./components/portfolio/Portfolio";
import { About } from "./components/about/About";
import { Contacts } from './components/contacts/Contacts'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Portfolio />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
