import Link from 'next/link'
import 'bulma/css/bulma.css'
import Navi from './navi'
import Header from './header'
import Swap from './swap'
import Borrow from './flashloan_borrow'
import Repay from './flashloan_repay'
import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import { ethers } from 'ethers'
import { arbitrageABI } from './contract'
import { uniswapV1TokenList } from './token_list'

export default function arbitrage() {
    const [borrowToken, setBorrowToken] = useState('ETH')
    const [borrowAmount, setBorrowAmount] = useState('')
    const [firstSwapTokenTo, setFirstSwapTokenTo] = useState('ETH')
    const [firstSwapAmountTo, setFirstSwapAmountTo] = useState('')
    const [firstDex, setFirstDex] = useState('')
    const [secondSwapTokenTo, setSecondSwapTokenTo] = useState('ETH')
    const [secondSwapAmountTo, setSecondSwapAmountTo] = useState('')
    const [secondDex, setSecondDex] = useState('')

    const run = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        //const web3 = new Web3(window.ethereum)
        const contractAddress = '0xf245a90f60A155309E0A6e56f84177e8f7b29019'

        //const arbitrageContract = new web3.eth.Contract(arbitrageABI, contractAddress)
        //await arbitrageContract.methods.makeArbitrage
        
        const arbitrageContract2 = new ethers.Contract(contractAddress, arbitrageABI, signer)
        const borrowDecimals = uniswapV1TokenList.find(token => token.name === borrowToken).decimals
        const borrowAmountNum = ethers.utils.parseUnits(borrowAmount, borrowDecimals).toNumber()
        let firstDex_, secondDex_
        if (firstDex === 'Uniswap V1 A') {
            firstDex_ = 'A'
        } else if (firstDex === 'Uniswap V1 B') {
            firstDex_ = 'B'
        }
        
        if (secondDex === 'Uniswap V1 A') {
            secondDex_ = 'A'
        } else if (secondDex === 'Uniswap V1 B') {
            secondDex_ = 'B'
        } 
        await arbitrageContract2.makeArbitrage(borrowToken, firstSwapTokenTo, firstDex_, secondDex_, borrowAmountNum)
        //await arbitrageContract2.makeArbitrage('DAI', 'ETH', 'B', 'A', 100000000)
        //arbitrageContract.someFunction(borrowToken, borrowAmount, firstDex, firstSwapTokenTo, secondDex)

    }

    return (
        <div>
            <Header />
            
            <Navi />
            
            <section className='section is-small'>
                <h1 className='title is-1 has-text-centered'>Arbitrage</h1>
                <h2 className='subtitle is-4 has-text-centered'>Spot price difference among exchanges, gain profit with no cost!</h2>
            </section>

            <div className='columns is-centered'>
                <div className='column is-one-third'>
                    <Borrow setTokenPar={setBorrowToken} setAmountPar={setBorrowAmount}/>
                    <Swap isInputEditable={false} tokenFromPar={borrowToken} amountFromPar={borrowAmount} setExchangePar={setFirstDex} setTokenToPar={setFirstSwapTokenTo} setAmountToPar={setFirstSwapAmountTo}/>
                    <Swap isInputEditable={false} tokenFromPar={firstSwapTokenTo} amountFromPar={firstSwapAmountTo} setExchangePar={setSecondDex} setTokenToPar={setSecondSwapTokenTo} setAmountToPar={setSecondSwapAmountTo}/>
                    <Repay tokenPar={secondSwapTokenTo} amountPar={secondSwapAmountTo}/>
                    
                    <button className='button is-success' onClick={run}>Let's do it!</button>
                </div>
            </div>

        </div>
    )
}