import Link from 'next/link'
import 'bulma/css/bulma.css'
import Navi, { web3 } from './navi'
import Header from './header'

export default function selfLiquidation() {
    return (
        <div>
            <Header />
            
            <Navi />
            
            <section className='section is-small'>
                <h1 className='title is-1 has-text-centered'>Self Liquidation</h1>
                <h2 className='subtitle is-4 has-text-centered'>What is self liquidation?</h2>
            </section>

        </div>
    )
}

/*
self-liquidation
0.기존에 lending protocol에서 담보대출한 상황
1.flashloan으로 토큰 빌림
2.담보대출을 갚으면서 담보를 인출
3.인출한 담보 스왑
4.flashloan 반환

flashloan으로 빌릴 토큰 종류, 양
토큰 스왑 종류 양
*/