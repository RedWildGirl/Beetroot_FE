import { Routes, Route, } from "react-router-dom";

import './App.scss';
import Home from '../src/components/pages/home/Home';
import Experience from './components/pages/experience/Experience';
import Personal from './components/pages/personal/Personal';
import Additional from "./components/pages/additional/Additional";

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personal" element={<Personal />} />
        <Route path="experience" element={<Experience />} />
        <Route path="additional" element={<Additional />} />
      </Routes>    
    </>
      
  );
}

export default App;
