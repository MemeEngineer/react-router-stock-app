import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './DashBoard.css'



export default function DashBoard(){
const [stocks, setStock] = useState([])
const apiKey = process.env.REACT_APP_STOCKAPI_KEY
const params = useParams()
const{symbol} = params;

const url = `https://financialmodelingprep.com/api/v3/available-traded/list?&limit=10&apikey=${apiKey}`

const getStock = async() => {
    try{
    const res = await fetch(url);
    const dataArr = await res.json();
    const data = dataArr.slice(0,10)
    setStock(data);
    console.log(data)
    }catch(e){
        console.log('Error Fetching Data', e)
    }
   
}

useEffect(()=> {
    getStock()
},[])


    return(
        <div>
            <h1>Dash</h1>
            <table>
                    <tr>
                        <th>Company Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                    </tr>
            {stocks.map((stock)=> {
                return(
                    
                    <tr>
                   <td>{stock.name}</td>
                   <td>{stock.symbol}</td>
                   <td>{stock.price}</td>
                    </tr>
                
                       
                )
            })}
            </table>
        </div>
    )
}