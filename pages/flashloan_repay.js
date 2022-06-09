import React, { useState, useEffect } from 'react'

export default function Repay({ tokenPar, amountPar }) {

    const [token, setToken] = useState("ETH")
    const [amount, setAmount] = useState("")
    
    const handleToken = (e) => {
        setToken(e.target.value)
    }
    
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const next = () => {
        //setTokenPar(e.target.value)
        //setAmountPar(e.target.value)
    }

    return (
        <div className="box">
            <h1 className="subtitle">Aave Flashloan</h1>
            <div className="field">
                <label className="label">Repay</label>
                <div className="control">
                    <div className='select'>
                        <select value={tokenPar} readOnly>
                            <option value={tokenPar} key={0}>{tokenPar}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className='input' type='text' value={amountPar} readOnly/>
                </div>
            </div>
        </div>
    )
}