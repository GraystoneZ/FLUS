import Link from 'next/link'
import { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import Navi, { web3 } from './navi'
import Header from './header'

export default function flus() {

    return (
        <div>
            <Header />
            
            <Navi />
            
            <section className='section is-medium'>
                <h1 className='title is-1 has-text-centered'>FLUS</h1>
                <h2 className='subtitle is-4 has-text-centered'>Flash Loan Utilization System</h2>
            </section>

            <div className='container'>
                <div className='tile is-ancestor'>
                    <div className='tile is-parent is-vertical'>
                        <div className='tile is-child box has-text-centered'>
                            <h1 className='title'>Arbitrage</h1>
                            <div className='block'>
                                <p>Spot price difference among exchanges, gain profit with no cost!</p>
                            </div>
                            <Link href='/arbitrage'>
                                <button className='button is-primary'>Go</button>
                            </Link>
                        </div>
                        <div className='tile is-child box has-text-centered'>
                            <h1 className='title'>Self-Liquidation</h1>
                            <div className='block'>
                                <p>Liquidate yourself with low fee!</p>
                            </div>
                            <Link href='/self_liquidation'>
                                <button className='button is-primary'>Go</button>
                            </Link>
                        </div>
                    </div>
                    <div className='tile is-parent is-vertical'>
                        <div className='tile is-child box has-text-centered'>
                            <h1 className='title'>Collateral Swap</h1>
                            <div className='block'>
                                <p>What is collateral swap</p>
                            </div>
                            <Link href='/collateral_swap'>
                                <button className='button is-primary'>Go</button>
                            </Link>
                        </div>
                        <div className='tile is-child box has-text-centered'>
                            <h1 className='title'>Interest Rate Swap</h1>
                            <div className='block'>
                                <p>What is interest rate swap</p>
                            </div>
                            <Link href='/interest_rate_swap'>
                                <button className='button is-primary'>Go</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
