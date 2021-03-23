import Navbar from './Navbar'
import Head from 'next/head'


const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>BTCPrice</title>
                <link rel="stylesheet"
                href="https://bootswatch.com/4/cyborg/bootstrap.min.css"/>
            </Head>
            <Navbar/>
            <div className="container">
            {props.children}
            </div>
        </div>
    )
}

export default Layout
