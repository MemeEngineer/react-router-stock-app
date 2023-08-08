
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import NavBar from './components/NavBar.js';
import Home from "./pages/Home.js"
import About from './pages/About.js';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stocks" element={<DashBoard/>}/>
        {/* <Route path="/stocks/:symbol" element={<DashBoard/>}/> */}
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
