import Layout from '../components/Layout'
import Prices from '../components/Prices'
const Index = (props) => {
    return (
        <Layout>
            <div>
                <h1>Welcome to BitsPrice</h1>
                <Prices bpi={props.bpi}/>
            </div>
        </Layout>
        
    )
}
Index.getInitialProps = async ()=>{
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()
    return {
        bpi: data.bpi
    }
}

export default Index