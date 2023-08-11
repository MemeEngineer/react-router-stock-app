
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import {useState, useEffect} from 'react'
import NavBar from './components/NavBar.js';
import Home from "./pages/Home.js"
import About from './pages/About.js';
import DashBoard from './pages/DashBoard';
import Stock from'./pages/Stock.js';

function App() {
  const [stocks, setStock] = useState([])
  const [info, setInfo] = useState()
  const apiKey = process.env.REACT_APP_STOCKAPI_KEY
  const url = `https://financialmodelingprep.com/api/v3/available-traded/list?&limit=10&apikey=${apiKey}`
  

const getStock = async() => {
  
  
  try{
    const randomNum= Math.floor(Math.random()* (50000 - 0) + 0) 
    const res = await fetch(url);
    const dataArr = await res.json();
    const data = dataArr.slice(randomNum,randomNum + 10)
    setStock(data);
    
    }catch(e){
        console.log('Error Fetching Data', e)
    }
   
}

useEffect(()=> {
    getStock()
},[])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stocks" element={<DashBoard stocks={stocks} setInfo={setInfo}/>}/>
        <Route path="/stocks/:symbol" element={<Stock info={info} />}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
