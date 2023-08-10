

export default function Stock({info}){

    return(
        <div>
            <h1>Stock</h1>
            <ul>

            <p> Company Name: {info.name}</p>
            <p>Symbol: {info.symbol}</p>
            <p>Price: ${info.price}</p>
            </ul>
            
            

        </div>
    )
}