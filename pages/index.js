import Fetch from "isomorphic-unfetch"
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"
import Prices from "../components/Prices"

const Index = (props) => (

    
    <Layout>
        <div>
            <h1>BitCoin Converter</h1>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
    const data = await res.json();
    return {
        bpi: data
    }
}

export default Index;