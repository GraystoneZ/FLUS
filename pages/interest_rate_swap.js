import Link from 'next/link'
import 'bulma/css/bulma.css'
import Navi, { web3 } from './navi'
import Header from './header'
import Borrow from './flashloan_borrow'
import Repay from './flashloan_repay'
import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { flashloanABI } from './contract'
import { uniswapV1TokenList } from './token_list'

export default function interestRateSwap() {
    const [borrowToken, setBorrowToken] = useState('ETH')
    const [borrowAmount, setBorrowAmount] = useState('')

    const run = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contractAddress = '0x7b3Ada2c8De8B6EAB01234CCE1D2934193F818f0'
        
        const flashloanContract = new ethers.Contract(contractAddress, flashloanABI, signer)
        //const borrowDecimals = uniswapV1TokenList.find(token => token.name === borrowToken).decimals
        //const borrowAmountNum = ethers.utils.parseUnits(borrowAmount, borrowDecimals).toNumber()
        await flashloanContract.flashloan()

    }

    return (
        <div>
            <Header />
            
            <Navi />
            
            <section className='section is-small'>
                <h1 className='title is-1 has-text-centered'>Interest Rate Swap</h1>
                <h2 className='subtitle is-4 has-text-centered'>What is interest rate swap?</h2>
            </section>

            
            <div className='columns is-centered'>
                <div className='column is-one-third'>
                    <Borrow setTokenPar={setBorrowToken} setAmountPar={setBorrowAmount}/>
                    <Repay tokenPar={borrowToken} amountPar={borrowAmount}/>
                    
                    <button className='button is-success' onClick={run}>Let's do it!</button>
                </div>
            </div>
        </div>
    )
}