import Link from 'next/link'
import { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import Navi from './navi'
import Header from './header'
import Borrow from './flashloan_borrow'
import Repay from './flashloan_repay'
import Swap from './swap'
import LendingCheck from './lending_check'
import WithdrawCheck from './withdraw_check'
import { ethers } from 'ethers'
import { uniswapV1TokenList } from './token_list'
import { selfLiquidationABI } from './contract'


export default function collateralSwap() {

    const [borrowToken, setBorrowToken] = useState('ETH')
    const [borrowAmount, setBorrowAmount] = useState('')
    const [swapTokenFrom, setSwapTokenFrom] = useState('ETH')
    const [swapAmountFrom, setSwapAmountFrom] = useState('')
    const [swapTokenTo, setSwapTokenTo] = useState('ETH')
    const [swapAmountTo, setSwapAmountTo] = useState('')
    const [dex, setDex] = useState('')

    const run = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contractAddress = '0x0A3b67ecFe15F7b318104C0ACFe2c61245F5b1Cb'
        
        const selfLiquidationContract = new ethers.Contract(contractAddress, selfLiquidationABI, signer)
        const borrowDecimals = uniswapV1TokenList.find(token => token.name === borrowToken).decimals
        const borrowAmountNum = ethers.utils.parseUnits(borrowAmount, borrowDecimals).toNumber()
        await selfLiquidationContract.makeLiquidation(borrowAmountNum)
    }

    return (
        <div>
            <Header />
            
            <Navi />
            
            <section className='section is-small'>
                <h1 className='title is-1 has-text-centered'>Collateral Swap</h1>
                <h2 className='subtitle is-4 has-text-centered'>What is collateral swap?</h2>
            </section>

            <div className='columns is-centered'>
                <div className='column is-one-third'>
                    <LendingCheck />
                    <Borrow setTokenPar={setBorrowToken} setAmountPar={setBorrowAmount}/>
                    <Swap isInputEditable={false} tokenFromPar={borrowToken} amountFromPar={borrowAmount} setExchangePar={setDex} setTokenToPar={setSwapTokenTo} setAmountToPar={setSwapAmountTo}/>
                    <WithdrawCheck tokenFromPar={borrowToken} amountFromPar={borrowAmount} />
                    <Repay tokenPar={swapTokenTo} amountPar={swapAmountTo}/>
                    <button className='button is-success' onClick={run}>Let's do it!</button>
                </div>
            </div>
        </div>
    )
}

/*
collateral-swap
0.????????? lending protocol?????? ??????????????? ??????
1.flashloan?????? ?????? ??????
2.swap?????? token????????????
3.?????? token????????? ?????? ??????
4.???????????? token?????? ??????

flashloan?????? ?????? ?????? ??????, ???
?????? ????????? ???????????? ?????? ???
????????? ???????????????
*/