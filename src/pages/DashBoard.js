// import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

import './DashBoard.css'



export default function DashBoard({stocks, setInfo}){
// const [stocks, setStock] = useState([])
// const apiKey = process.env.REACT_APP_STOCKAPI_KEY
// const params = useParams()
// const{symbol} = params;

// const url = `https://financialmodelingprep.com/api/v3/available-traded/list?&limit=10&apikey=${apiKey}`

// const getStock = async() => {
//     try{
//     const res = await fetch(url);
//     const dataArr = await res.json();
//     const data = dataArr.slice(0,10)
//     setStock(data);
    
//     }catch(e){
//         console.log('Error Fetching Data', e)
//     }
   
// }

// useEffect(()=> {
//     getStock()
// },[])

const handleClick =(stock)=>{
setInfo(stock)
}

    return(
        <div className="dash">
            <h1>Dash</h1>
            <div className="table">
            
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
            {stocks.map((stock, index)=> {
                return(
                    
                    <Link to={`/stocks/${stock.symbol}`} onClick={()=> handleClick(stock)}>
                    <tr key={index}>
                    
                   <td>{stock.name}</td>
                   <td>{stock.symbol}</td>
                   <td>${stock.price}</td>
                
                    </tr>
                    </Link>
                    
                
                )
            })}
            </tbody>
            </table>
            </div>
        </div>
    )
}