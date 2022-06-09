import { uniswapV3TokenList, uniswapV1TokenList } from './token_list'
import React, { useState, useEffect } from 'react'

export default function Borrow({ setTokenPar, setAmountPar }) {

    const [token, setToken] = useState("ETH")
    const [amount, setAmount] = useState("")
    
    const handleToken = (e) => {
        setToken(e.target.value)
    }
    
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const next = () => {
        setTokenPar(token)
        setAmountPar(amount)
    }

    return (
        <div className="box">
            <h1 className="subtitle">Aave Flashloan</h1>
            <div className="field">
                <label className="label">Borrow</label>
                <div className="control">
                    <div className='select'>
                        <select onChange={handleToken} value={token}>
                            {uniswapV1TokenList.map(({id, name}) => (
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
                    <input className='input' type='text' placeholder='Enter amount' onChange={handleAmount}/>
                </div>
            </div>
            <button className='button is-link' onClick={next}>Next</button>
        </div>
    )
}