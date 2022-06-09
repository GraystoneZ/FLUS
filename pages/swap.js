import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import { Pool } from '@uniswap/v3-sdk'
import { Token } from '@uniswap/sdk-core'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
import { uniswapV1TokenList, uniswapV3TokenList } from './token_list'
import { uniswapV1FactoryABI, uniswapV1ExchangeABI, uniswapV1TokenABI } from './contract'


export default function Swap({ isInputEditable, tokenFromPar, amountFromPar, setExchangePar, setTokenFromPar,  setAmountFromPar , setTokenToPar, setAmountToPar}) { //
    const dexList = [
        { id : 1, name : "Uniswap V1 A", address : '0xECc6C0542710a0EF07966D7d1B10fA38bbb86523' },
        { id : 2, name : "Uniswap V1 B", address : '0x54Ac34e5cE84C501165674782582ADce2FDdc8F4' }
        //, { id : 3, name : "Uniswap V3", address : '' }
    ]


    const [exchange, setExchange] = useState("Uniswap V1 A")
    const [tokenFrom, setTokenFrom] = useState("ETH")
    const [tokenTo, setTokenTo] = useState("ETH")
    const [amountFrom, setAmountFrom] = useState("")
    const [amountTo, setAmountTo] = useState("")

    const handleExchange = (e) => {
        setExchange(e.target.value)
        setExchangePar(e.target.value)
    }
    
    const handleTokenFrom = (e) => {
        setTokenFrom(e.target.value)
        if (isInputEditable) setTokenFromPar(e.target.value)
    }
    
    const handleTokenTo = (e) => {
        setTokenTo(e.target.value)
        setTokenToPar(e.target.value)
    }

    const handleAmountFrom = (e) => {
        setAmountFrom(e.target.value)
        if (isInputEditable) setAmountFromPar(e.target.value)
    }

    const handleAmountTo = (str) => {
        setAmountTo(str)
        setAmountToPar(str)
    }

    //For UniswapV3
    const getPoolImmutables = async ( poolContract ) => {
        const [factory, token0, token1, fee, tickSpacing, maxLiquidityPerTick] = await Promise.all([
            poolContract.factory(),
            poolContract.token0(),
            poolContract.token1(),
            poolContract.fee(),
            poolContract.tickSpacing(),
            poolContract.maxLiquidityPerTick(),
        ])
        const immutables = {
            factory: factory,
            token0: token0,
            token1: token1,
            fee: fee,
            tickSpacing: tickSpacing,
            maxLiquidityPerTick: maxLiquidityPerTick,
        }
        return immutables
    }

    //For UniswapV3
    const getPoolState = async ( poolContract ) => {
        const [liquidity, slot] = await Promise.all([poolContract.liquidity(), poolContract.slot0()])

        const poolState = {
            liquidity: liquidity,
            sqrtPriceX96: slot[0],
            tick: slot[1],
            observationIndex: slot[2],
            observationCardinality: slot[3],
            observationCardinalityNext: slot[4],
            feeProtocol: slot[5],
            unlocked: slot[6],
        }

        return poolState
    }

    //For UniswapV3
    const uniswapV3 = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const tokenFrom_ = uniswapV3TokenList.find(token => token.name === (isInputEditable ? tokenFrom : tokenFromPar))
        const tokenTo_ = uniswapV3TokenList.find(token => token.name === tokenTo)
        const factoryAddress = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
        const quoterAddress = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'
        const { abi: poolImmutablesAbi } = require('@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json')
        const { abi: QuoterABI } = require('@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json')
        const { abi: factoryAbi } = require('@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Factory.sol/IUniswapV3Factory.json')

        const quoterContract = new ethers.Contract(quoterAddress, QuoterABI, provider)
        const factoryContract = new ethers.Contract(factoryAddress, factoryAbi, provider)
        const poolAddress = await factoryContract.getPool(tokenFrom_.address, tokenTo_.address, 3000) // = '0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8'
        
        const poolContract = new ethers.Contract(poolAddress, poolImmutablesAbi, provider)

        const [immutables, state] = await Promise.all([getPoolImmutables(poolContract), getPoolState(poolContract)])

        const amountFromBN = new BigNumber((isInputEditable ? amountFrom : amountFromPar))
        const amountFromStr = amountFromBN.multipliedBy(10 ** tokenFrom_.decimals).toString()
        
        const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
            tokenFrom_.address,
            tokenTo_.address,
            immutables.fee,
            amountFromStr,
            0
        )

        const amountToBN = new BigNumber(quotedAmountOut.toString())
        const amountToStr = amountToBN.dividedBy(10 ** tokenTo_.decimals).toString()
        handleAmountTo(amountToStr)
    }

    const uniswapV1EthToToken = async ( factoryContract, tokenAddress) => {
        const web3 = new Web3(window.ethereum)
        //const exchangeAddress = await factoryContract.callStatic.getExchange(tokenAddress)
        const exchangeAddress = await factoryContract.methods.getExchange(tokenAddress).call()
        //const tokenContract = new ethers.Contract(tokenAddress, uniswapV1TokenABI, provider)
        const tokenContract = new web3.eth.Contract(uniswapV1TokenABI, tokenAddress)
        // Sell ETH for ERC20
        const inputAmount = ethers.utils.parseUnits((isInputEditable ? amountFrom : amountFromPar), 'ether')
        const inputReserve = ethers.BigNumber.from(await web3.eth.getBalance(exchangeAddress))  //await provider.getBalance(exchangeAddress))
        //const outputReserve = ethers.BigNumber.from(await tokenContract.balanceOf(exchangeAddress))
        const outputReserve = ethers.BigNumber.from(await tokenContract.methods.balanceOf(exchangeAddress).call())

        // Output amount bought
        const numerator = inputAmount.mul(outputReserve).mul(997)
        const denominator = inputReserve.mul(1000).add(inputAmount.mul(997))
        const outputAmount = numerator.div(denominator)
        return outputAmount
    }

    const uniswapV1TokenToEth = async ( factoryContract, tokenAddress, tokenDecimals) => {
        const web3 = new Web3(window.ethereum)
        const exchangeAddress = await factoryContract.methods.getExchange(tokenAddress).call()
        const tokenContract = new web3.eth.Contract(uniswapV1TokenABI, tokenAddress)

        // Sell ERC20 for ETH
        const inputAmount = ethers.utils.parseUnits((isInputEditable ? amountFrom : amountFromPar), tokenDecimals)
        const inputReserve = ethers.BigNumber.from(await tokenContract.methods.balanceOf(exchangeAddress).call())
        const outputReserve = ethers.BigNumber.from(await web3.eth.getBalance(exchangeAddress))

        // Output amount bought
        const numerator = inputAmount.mul(outputReserve).mul(997)
        const denominator = inputReserve.mul(1000).add(inputAmount.mul(997))
        const outputAmount = numerator.div(denominator)
        return outputAmount
    }
    
    const uniswapV1TokenToToken = async ( factoryContract, tokenFrom, tokenTo) => {
        const web3 = new Web3(window.ethereum)
        const exchangeFromAddress = await factoryContract.methods.getExchange(tokenFrom.address).call()
        const tokenFromContract = new web3.eth.Contract(uniswapV1TokenABI, tokenFrom.address)
        const exchangeToAddress = await factoryContract.methods.getExchange(tokenTo.address).call()
        const tokenToContract = new web3.eth.Contract(uniswapV1TokenABI, tokenTo.address)

        // TokenA (ERC20) to ETH conversion
        const inputAmountA = ethers.utils.parseUnits((isInputEditable ? amountFrom : amountFromPar), tokenFrom.decimals)
        const inputReserveA = ethers.BigNumber.from(await tokenFromContract.methods.balanceOf(exchangeFromAddress).call())
        const outputReserveA = ethers.BigNumber.from(await web3.eth.getBalance(exchangeFromAddress))

        const numeratorA = inputAmountA.mul(outputReserveA).mul(997)
        const denominatorA = inputReserveA.mul(1000).add(inputAmountA.mul(997))
        const outputAmountA = numeratorA.div(denominatorA)

        // ETH to TokenB conversion
        const inputAmountB = outputAmountA
        const inputReserveB = ethers.BigNumber.from(await web3.eth.getBalance(exchangeToAddress))
        const outputReserveB = ethers.BigNumber.from(await tokenToContract.methods.balanceOf(exchangeToAddress).call())

        const numeratorB = inputAmountB.mul(outputReserveB).mul(997)
        const denominatorB = inputReserveB.mul(1000).add(inputAmountB.mul(997))
        const outputAmountB = numeratorB.div(denominatorB)
        return outputAmountB
    }

    const uniswapV1 = async () => {
        const web3 = new Web3(window.ethereum)
        //const provider = new ethers.providers.Web3Provider(window.ethereum)
        const tokenFrom_ = uniswapV1TokenList.find(token => token.name === (isInputEditable ? tokenFrom : tokenFromPar))
        const tokenTo_ = uniswapV1TokenList.find(token => token.name === tokenTo)

        const factoryAddress = dexList.find(dex => dex.name === exchange).address
        //const factoryContract = new ethers.Contract(factoryAddress, uniswapV1FactoryABI, provider)
        const factoryContract = new web3.eth.Contract(uniswapV1FactoryABI, factoryAddress)

        if (tokenFrom_.name === 'ETH') {
            const amountTo = await uniswapV1EthToToken(factoryContract, tokenTo_.address)
            const amountToStr = ethers.utils.formatUnits(amountTo, tokenTo_.decimals)
            handleAmountTo(amountToStr)
        } else if (tokenTo_.name === 'ETH') {
            const amountTo = await uniswapV1TokenToEth(factoryContract, tokenFrom_.address, tokenFrom_.decimals)
            const amountToStr = ethers.utils.formatUnits(amountTo, 'ether')
            handleAmountTo(amountToStr)
        } else {
            const amountTo = await uniswapV1TokenToToken(factoryContract, tokenFrom_, tokenTo_)
            const amountToStr = ethers.utils.formatUnits(amountTo, tokenTo_.decimals)
            handleAmountTo(amountToStr)
        }
    }

    const main = async () => {
        if (exchange == 'Uniswap V1 A') {
            await uniswapV1()
        } else if (exchange == 'Uniswap V1 B') {
            await uniswapV1()
        } else if (exchange == 'Uniswap V3') {
            await uniswapV3()
        }
    }

    useEffect(() => {
        BigNumber.config({ EXPONENTIAL_AT: 1e+9 })
    })

    return (
        <div className="box">
            <h1 className="subtitle">Swap</h1>
            <div className="field">
                <label className="label">DEX</label>
                <div className="control">
                    <div className='select'>
                        <select onChange={handleExchange} value={exchange}>
                            {dexList.map(({id, name}) => (
                                <option value={name} key={id}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">From</label>
                <div className="control">
                    <div className='select'>
                        { isInputEditable ?
                        <select onChange={handleTokenFrom} value={tokenFrom}>
                            {uniswapV1TokenList.map(({id, name}) => (
                                <option value={name} key={id}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        :
                        <select value={tokenFromPar} readOnly>
                            <option value={tokenFromPar} key={0}>{tokenFromPar}</option>
                        </select>
                        }
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    { isInputEditable ?
                    <input className='input' type='text' placeholder='Enter amount' onChange={handleAmountFrom}/>
                    :
                    <input className='input' type='text' value={amountFromPar} readOnly/>
                    }
                </div>
            </div>
            <div className="field">
                <label className="label">To</label>
                <div className="control">
                    <div className='select'>
                        <select onChange={handleTokenTo} value={tokenTo}>
                            {uniswapV1TokenList.map(({id, name, address}) => (
                                <option value={name} key={id}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className='input' type='text' value={amountTo} readOnly/>
                </div>
            </div>
            <button className='button is-link' onClick={main}>Next</button>
        </div>
    )
}