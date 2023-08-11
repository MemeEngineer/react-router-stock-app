import './Stock.css'


export default function Stock({info}){
   
    return(
        <div className="stock-container">
            <div className="stock">
                <div className="stock-card">
                Stock
                </div>
            
            <ul>
            <p><span>Company Name:</span> {info.name}</p>
            <p><span>Symbol:</span> {info.symbol}</p>
            <p><span>Price:</span> ${info.price}</p>
            </ul>
            </div>
        </div>
    )
}