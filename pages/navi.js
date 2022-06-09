import Link from 'next/link'
import Web3 from 'web3'

const connectWalletHandler = () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== "undefined") {
        window.ethereum.request({ method: "eth_requestAccounts"})
        web3 = new Web3(window.ethereum)
    } else {
        alert('Metamask is not installed. Please install Metamask.')
    }
}

let web3 = null
export { web3 }

export default function Navi() {
    return (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <img src="/thunder.png"></img>
                    <h1 className='title is-4 has-text-white ml-1'>FLUS</h1>
                </div>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link href='/flus'>
                        <a className="navbar-item">
                            Home
                        </a>
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item">
                            About
                        </a>
                        <a className="navbar-item">
                            Jobs
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <button className="button is-primary" onClick={connectWalletHandler}>
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}