import Head from 'next/head'
import NavBar from './NavBar'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>BitsPrice</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
            </Head>
            <NavBar/>
            <div className="container">
                {props.children}
            </div>
            
        </div>
    )
}

export default Layout