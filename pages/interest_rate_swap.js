import Link from 'next/link'
import 'bulma/css/bulma.css'
import Navi, { web3 } from './navi'
import Header from './header'

export default function interestRateSwap() {
    return (
        <div>
            <Header />
            
            <Navi />
            
            <section className='section is-small'>
                <h1 className='title is-1 has-text-centered'>Interest Rate Swap</h1>
                <h2 className='subtitle is-4 has-text-centered'>What is interest rate swap?</h2>
            </section>

        </div>
    )
}