import Link from 'next/link'
import { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import Navi, { web3 } from './navi'
import Header from './header'


export default function collateralSwap() {

    useEffect(() => {
        const univ3prices = require('@thanpolas/univ3prices');

        const price = univ3prices([USDC.decimals, USDT.decimals], sqrtPrice).toAuto();

        console.log(price);
    })

    return (
        <div>
            <Header />
            
            <Navi />
            
            <section className='section is-small'>
                <h1 className='title is-1 has-text-centered'>Collateral Swap</h1>
                <h2 className='subtitle is-4 has-text-centered'>What is collateral swap?</h2>
            </section>

        </div>
    )
}

/*
collateral-swap
0.기존에 lending protocol에서 담보대출한 상황
1.flashloan으로 토큰 빌림
2.swap해서 token종류변경
3.바뀐 token담보로 대출 실시
4.대출받은 token으로 반환

flashloan으로 빌릴 토큰 종류, 양
토큰 스왑할 프로토콜 종류 양
얼마나 대출할건지
*/