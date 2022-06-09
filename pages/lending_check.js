import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'

export default function LendingCheck () {
    const protoList = [
        { id : 1, name : "Aave V2", address : '0xECc6C0542710a0EF07966D7d1B10fA38bbb86523' }
    ]

    const [proto, setProto] = useState("Aave V2")
    const [debt, setDebt] = useState('')
    
    const handleProto = (e) => {
        setProto(e.target.value)
    }

    const check = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const lendingPoolAddress = '0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe'
        const { abi : LendingPoolV2Artifact } = require('@aave/protocol-v2/artifacts/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json')
        const lendingPoolContract = new ethers.Contract(lendingPoolAddress, LendingPoolV2Artifact, provider)
        const accountlist = await provider.listAccounts()
        const userData = await lendingPoolContract.getUserAccountData(accountlist[0])
        const debtEthStr = ethers.utils.formatEther(userData.totalDebtETH)
        setDebt(debtEthStr)
    }

    return (
        <div className="box">
            <h1 className="subtitle">Check Debt</h1>
            <div className="field">
                <label className="label">Protocol</label>
                <div className="control">
                    <div className='select'>
                        <select onChange={handleProto} value={proto}>
                            {protoList.map(({id, name}) => (
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
                    <input className='input' type='text' value={debt} readOnly/>
                </div>
            </div>
            <button className='button is-link' onClick={check}>Check</button>
        </div>
    )
}