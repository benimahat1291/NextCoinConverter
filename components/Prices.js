import { useState } from "react"


const Prices = ({bpi}) => {
    const [currency, setCurrency] = useState("USD")
    console.log(bpi)

    let list = "";

    if(currency==="USD"){
        list = <li className="list-group-item">
        Bitcoin rate for {bpi.bpi.USD.description} : <span className="badge badge-primary">{bpi.bpi.USD.code}</span> <strong>{bpi.bpi.USD.rate}</strong>
    </li>
    } else if (currency === "GBP") {
        list = <li className="list-group-item">
        Bitcoin rate for {bpi.bpi.GBP.description} : <span className="badge badge-primary">{bpi.bpi.GBP.code}</span> <strong>{bpi.bpi.GBP.rate}</strong>
    </li>
    } else if (currency  === "EUR") {
        list = <li className="list-group-item">
        Bitcoin rate for {bpi.bpi.EUR.description} : <span className="badge badge-primary">{bpi.bpi.EUR.code}</span> <strong>{bpi.bpi.EUR.rate}</strong>
    </li>
    }

    return (
        <div>
            <select onChange={e=>setCurrency(e.target.value)}className="form-control">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
            <br/>
            <ul className="list-group">
               {list}
            </ul>

        </div>
    )
}

export default Prices
