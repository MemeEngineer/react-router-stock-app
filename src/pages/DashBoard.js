import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function DashBoard(){
const [stocks, setStock] = useState([])
const apiKey = process.env.REACT_APP_STOCKAPI_KEY
const params = useParams()
const{symbol} = params;

const url = `https://financialmodelingprep.com/api/v3/available-traded/list?&limit=10&apikey=${apiKey}`

const getStock = async() => {
    try{
    const res = await fetch(url);
    const data = await res.json();
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
            {stocks.map((stock)=> {
                return(
                    <div>
                        {stock.symbol}
                        </div>
                )
            })}
        </div>
    )
}