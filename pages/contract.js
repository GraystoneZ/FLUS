export const arbitrageABI = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_reserve",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_params",
				"type": "bytes"
			}
		],
		"name": "executeOperation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "imbalanceExchanges",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenA",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tokenB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dexA",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dexB",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "makeArbitrage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_assetAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "LogWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Profit",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_assetAddress",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "addressesProvider",
		"outputs": [
			{
				"internalType": "contract ILendingPoolAddressesProvider",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BAT_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "bat_string",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "DAI_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dai_string",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dexA_string",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dexB_string",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "eth_string",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "exchangeA",
		"outputs": [
			{
				"internalType": "contract UniswapExchangeInterface",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "exchangeB",
		"outputs": [
			{
				"internalType": "contract UniswapExchangeInterface",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lendingPool",
		"outputs": [
			{
				"internalType": "contract ILendingPool",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "none_string",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "TOKEN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "UNISWAP_FACTORY_A",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "UNISWAP_FACTORY_B",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "uniswapFactoryA",
		"outputs": [
			{
				"internalType": "contract UniswapFactoryInterface",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "uniswapFactoryB",
		"outputs": [
			{
				"internalType": "contract UniswapFactoryInterface",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export const flashloanABI = [
	{
	   "inputs": [],
	   "stateMutability": "nonpayable",
	   "type": "constructor"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "_from",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "_assetAddress",
			 "type": "address"
		  },
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "amount",
			 "type": "uint256"
		  }
	   ],
	   "name": "LogWithdraw",
	   "type": "event"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "previousOwner",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "newOwner",
			 "type": "address"
		  }
	   ],
	   "name": "OwnershipTransferred",
	   "type": "event"
	},
	{
	   "inputs": [],
	   "name": "addressesProvider",
	   "outputs": [
		  {
			 "internalType": "contract ILendingPoolAddressesProviderV1",
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "_reserve",
			 "type": "address"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_amount",
			 "type": "uint256"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_fee",
			 "type": "uint256"
		  },
		  {
			 "internalType": "bytes",
			 "name": "_params",
			 "type": "bytes"
		  }
	   ],
	   "name": "executeOperation",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "flashloan",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "owner",
	   "outputs": [
		  {
			 "internalType": "address",
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "renounceOwnership",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "newOwner",
			 "type": "address"
		  }
	   ],
	   "name": "transferOwnership",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "_assetAddress",
			 "type": "address"
		  }
	   ],
	   "name": "withdraw",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "stateMutability": "payable",
	   "type": "receive"
	}
 ]

export const selfLiquidationABI = [
	{
	   "constant": true,
	   "inputs": [],
	   "name": "TOKEN_ADDRESS",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "KOVAN_ETH_ADDRESS",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "uniswapFactoryB",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "exchangeB",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "DAI_ADDRESS",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "dexB_string",
	   "outputs": [
		  {
			 "name": "",
			 "type": "string"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "UNISWAP_FACTORY_A",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": false,
	   "inputs": [
		  {
			 "name": "_assetAddress",
			 "type": "address"
		  }
	   ],
	   "name": "withdraw",
	   "outputs": [],
	   "payable": false,
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "exchangeA",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "uniswapFactoryA",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "bat_string",
	   "outputs": [
		  {
			 "name": "",
			 "type": "string"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": false,
	   "inputs": [],
	   "name": "renounceOwnership",
	   "outputs": [],
	   "payable": false,
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "amount_to_repay_DAI",
	   "outputs": [
		  {
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "UNISWAP_FACTORY_B",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "owner",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "isOwner",
	   "outputs": [
		  {
			 "name": "",
			 "type": "bool"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "dexA_string",
	   "outputs": [
		  {
			 "name": "",
			 "type": "string"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "lendingPool",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "eth_string",
	   "outputs": [
		  {
			 "name": "",
			 "type": "string"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "dai_string",
	   "outputs": [
		  {
			 "name": "",
			 "type": "string"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "addressesProvider",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": false,
	   "inputs": [
		  {
			 "name": "amount",
			 "type": "uint256"
		  }
	   ],
	   "name": "makeLiquidation",
	   "outputs": [],
	   "payable": false,
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "BAT_ADDRESS",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "AAVE_V2_LENDINGPOOL",
	   "outputs": [
		  {
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "amount_to_withdraw_ETH",
	   "outputs": [
		  {
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "constant": false,
	   "inputs": [
		  {
			 "name": "_reserve",
			 "type": "address"
		  },
		  {
			 "name": "_amount",
			 "type": "uint256"
		  },
		  {
			 "name": "_fee",
			 "type": "uint256"
		  },
		  {
			 "name": "_params",
			 "type": "bytes"
		  }
	   ],
	   "name": "executeOperation",
	   "outputs": [],
	   "payable": false,
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "constant": false,
	   "inputs": [
		  {
			 "name": "newOwner",
			 "type": "address"
		  }
	   ],
	   "name": "transferOwnership",
	   "outputs": [],
	   "payable": false,
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "constant": true,
	   "inputs": [],
	   "name": "none_string",
	   "outputs": [
		  {
			 "name": "",
			 "type": "string"
		  }
	   ],
	   "payable": false,
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "payable": false,
	   "stateMutability": "nonpayable",
	   "type": "constructor"
	},
	{
	   "payable": true,
	   "stateMutability": "payable",
	   "type": "fallback"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": false,
			 "name": "amount",
			 "type": "uint256"
		  }
	   ],
	   "name": "Profit",
	   "type": "event"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": true,
			 "name": "_from",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "name": "_assetAddress",
			 "type": "address"
		  },
		  {
			 "indexed": false,
			 "name": "amount",
			 "type": "uint256"
		  }
	   ],
	   "name": "LogWithdraw",
	   "type": "event"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": true,
			 "name": "previousOwner",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "name": "newOwner",
			 "type": "address"
		  }
	   ],
	   "name": "OwnershipTransferred",
	   "type": "event"
	}
 ]

export const uniswapV1FactoryABI = [
	{
	  name: 'NewExchange',
	  inputs: [
		{ type: 'address', name: 'token', indexed: true },
		{ type: 'address', name: 'exchange', indexed: true },
	  ],
	  anonymous: false,
	  type: 'event',
	},
	{
	  name: 'initializeFactory',
	  outputs: [],
	  inputs: [{ type: 'address', name: 'template' }],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 35725,
	},
	{
	  name: 'createExchange',
	  outputs: [{ type: 'address', name: 'out' }],
	  inputs: [{ type: 'address', name: 'token' }],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 187911,
	},
	{
	  name: 'getExchange',
	  outputs: [{ type: 'address', name: 'out' }],
	  inputs: [{ type: 'address', name: 'token' }],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 715,
	},
	{
	  name: 'getToken',
	  outputs: [{ type: 'address', name: 'out' }],
	  inputs: [{ type: 'address', name: 'exchange' }],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 745,
	},
	{
	  name: 'getTokenWithId',
	  outputs: [{ type: 'address', name: 'out' }],
	  inputs: [{ type: 'uint256', name: 'token_id' }],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 736,
	},
	{
	  name: 'exchangeTemplate',
	  outputs: [{ type: 'address', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 633,
	},
	{
	  name: 'tokenCount',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 663,
	},
]

export const uniswapV1ExchangeABI = [
	{
	  name: 'TokenPurchase',
	  inputs: [
		{ type: 'address', name: 'buyer', indexed: true },
		{ type: 'uint256', name: 'eth_sold', indexed: true },
		{ type: 'uint256', name: 'tokens_bought', indexed: true },
	  ],
	  anonymous: false,
	  type: 'event',
	},
	{
	  name: 'EthPurchase',
	  inputs: [
		{ type: 'address', name: 'buyer', indexed: true },
		{ type: 'uint256', name: 'tokens_sold', indexed: true },
		{ type: 'uint256', name: 'eth_bought', indexed: true },
	  ],
	  anonymous: false,
	  type: 'event',
	},
	{
	  name: 'AddLiquidity',
	  inputs: [
		{ type: 'address', name: 'provider', indexed: true },
		{ type: 'uint256', name: 'eth_amount', indexed: true },
		{ type: 'uint256', name: 'token_amount', indexed: true },
	  ],
	  anonymous: false,
	  type: 'event',
	},
	{
	  name: 'RemoveLiquidity',
	  inputs: [
		{ type: 'address', name: 'provider', indexed: true },
		{ type: 'uint256', name: 'eth_amount', indexed: true },
		{ type: 'uint256', name: 'token_amount', indexed: true },
	  ],
	  anonymous: false,
	  type: 'event',
	},
	{
	  name: 'Transfer',
	  inputs: [
		{ type: 'address', name: '_from', indexed: true },
		{ type: 'address', name: '_to', indexed: true },
		{ type: 'uint256', name: '_value', indexed: false },
	  ],
	  anonymous: false,
	  type: 'event',
	},
	{
	  name: 'Approval',
	  inputs: [
		{ type: 'address', name: '_owner', indexed: true },
		{ type: 'address', name: '_spender', indexed: true },
		{ type: 'uint256', name: '_value', indexed: false },
	  ],
	  anonymous: false,
	  type: 'event',
	},
	{
	  name: 'setup',
	  outputs: [],
	  inputs: [{ type: 'address', name: 'token_addr' }],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 175875,
	},
	{
	  name: 'addLiquidity',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'min_liquidity' },
		{ type: 'uint256', name: 'max_tokens' },
		{ type: 'uint256', name: 'deadline' },
	  ],
	  constant: false,
	  payable: true,
	  type: 'function',
	  gas: 82605,
	},
	{
	  name: 'removeLiquidity',
	  outputs: [
		{ type: 'uint256', name: 'out' },
		{ type: 'uint256', name: 'out' },
	  ],
	  inputs: [
		{ type: 'uint256', name: 'amount' },
		{ type: 'uint256', name: 'min_eth' },
		{ type: 'uint256', name: 'min_tokens' },
		{ type: 'uint256', name: 'deadline' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 116814,
	},
	{
	  name: '__default__',
	  outputs: [],
	  inputs: [],
	  constant: false,
	  payable: true,
	  type: 'function',
	},
	{
	  name: 'ethToTokenSwapInput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'min_tokens' },
		{ type: 'uint256', name: 'deadline' },
	  ],
	  constant: false,
	  payable: true,
	  type: 'function',
	  gas: 12757,
	},
	{
	  name: 'ethToTokenTransferInput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'min_tokens' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'recipient' },
	  ],
	  constant: false,
	  payable: true,
	  type: 'function',
	  gas: 12965,
	},
	{
	  name: 'ethToTokenSwapOutput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_bought' },
		{ type: 'uint256', name: 'deadline' },
	  ],
	  constant: false,
	  payable: true,
	  type: 'function',
	  gas: 50455,
	},
	{
	  name: 'ethToTokenTransferOutput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_bought' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'recipient' },
	  ],
	  constant: false,
	  payable: true,
	  type: 'function',
	  gas: 50663,
	},
	{
	  name: 'tokenToEthSwapInput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_sold' },
		{ type: 'uint256', name: 'min_eth' },
		{ type: 'uint256', name: 'deadline' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 47503,
	},
	{
	  name: 'tokenToEthTransferInput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_sold' },
		{ type: 'uint256', name: 'min_eth' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'recipient' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 47712,
	},
	{
	  name: 'tokenToEthSwapOutput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'eth_bought' },
		{ type: 'uint256', name: 'max_tokens' },
		{ type: 'uint256', name: 'deadline' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 50175,
	},
	{
	  name: 'tokenToEthTransferOutput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'eth_bought' },
		{ type: 'uint256', name: 'max_tokens' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'recipient' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 50384,
	},
	{
	  name: 'tokenToTokenSwapInput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_sold' },
		{ type: 'uint256', name: 'min_tokens_bought' },
		{ type: 'uint256', name: 'min_eth_bought' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'token_addr' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 51007,
	},
	{
	  name: 'tokenToTokenTransferInput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_sold' },
		{ type: 'uint256', name: 'min_tokens_bought' },
		{ type: 'uint256', name: 'min_eth_bought' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'recipient' },
		{ type: 'address', name: 'token_addr' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 51098,
	},
	{
	  name: 'tokenToTokenSwapOutput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_bought' },
		{ type: 'uint256', name: 'max_tokens_sold' },
		{ type: 'uint256', name: 'max_eth_sold' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'token_addr' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 54928,
	},
	{
	  name: 'tokenToTokenTransferOutput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_bought' },
		{ type: 'uint256', name: 'max_tokens_sold' },
		{ type: 'uint256', name: 'max_eth_sold' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'recipient' },
		{ type: 'address', name: 'token_addr' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 55019,
	},
	{
	  name: 'tokenToExchangeSwapInput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_sold' },
		{ type: 'uint256', name: 'min_tokens_bought' },
		{ type: 'uint256', name: 'min_eth_bought' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'exchange_addr' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 49342,
	},
	{
	  name: 'tokenToExchangeTransferInput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_sold' },
		{ type: 'uint256', name: 'min_tokens_bought' },
		{ type: 'uint256', name: 'min_eth_bought' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'recipient' },
		{ type: 'address', name: 'exchange_addr' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 49532,
	},
	{
	  name: 'tokenToExchangeSwapOutput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_bought' },
		{ type: 'uint256', name: 'max_tokens_sold' },
		{ type: 'uint256', name: 'max_eth_sold' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'exchange_addr' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 53233,
	},
	{
	  name: 'tokenToExchangeTransferOutput',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'uint256', name: 'tokens_bought' },
		{ type: 'uint256', name: 'max_tokens_sold' },
		{ type: 'uint256', name: 'max_eth_sold' },
		{ type: 'uint256', name: 'deadline' },
		{ type: 'address', name: 'recipient' },
		{ type: 'address', name: 'exchange_addr' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 53423,
	},
	{
	  name: 'getEthToTokenInputPrice',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [{ type: 'uint256', name: 'eth_sold' }],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 5542,
	},
	{
	  name: 'getEthToTokenOutputPrice',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [{ type: 'uint256', name: 'tokens_bought' }],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 6872,
	},
	{
	  name: 'getTokenToEthInputPrice',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [{ type: 'uint256', name: 'tokens_sold' }],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 5637,
	},
	{
	  name: 'getTokenToEthOutputPrice',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [{ type: 'uint256', name: 'eth_bought' }],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 6897,
	},
	{
	  name: 'tokenAddress',
	  outputs: [{ type: 'address', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 1413,
	},
	{
	  name: 'factoryAddress',
	  outputs: [{ type: 'address', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 1443,
	},
	{
	  name: 'balanceOf',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [{ type: 'address', name: '_owner' }],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 1645,
	},
	{
	  name: 'transfer',
	  outputs: [{ type: 'bool', name: 'out' }],
	  inputs: [
		{ type: 'address', name: '_to' },
		{ type: 'uint256', name: '_value' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 75034,
	},
	{
	  name: 'transferFrom',
	  outputs: [{ type: 'bool', name: 'out' }],
	  inputs: [
		{ type: 'address', name: '_from' },
		{ type: 'address', name: '_to' },
		{ type: 'uint256', name: '_value' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 110907,
	},
	{
	  name: 'approve',
	  outputs: [{ type: 'bool', name: 'out' }],
	  inputs: [
		{ type: 'address', name: '_spender' },
		{ type: 'uint256', name: '_value' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 38769,
	},
	{
	  name: 'allowance',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'address', name: '_owner' },
		{ type: 'address', name: '_spender' },
	  ],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 1925,
	},
	{
	  name: 'name',
	  outputs: [{ type: 'bytes32', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 1623,
	},
	{
	  name: 'symbol',
	  outputs: [{ type: 'bytes32', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 1653,
	},
	{
	  name: 'decimals',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 1683,
	},
	{
	  name: 'totalSupply',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 1713,
	},
]

export const uniswapV1TokenABI = [
	{
	  name: 'Transfer',
	  inputs: [
		{ type: 'address', name: '_from', indexed: true },
		{ type: 'address', name: '_to', indexed: true },
		{ type: 'uint256', name: '_value', indexed: false },
	  ],
	  anonymous: false,
	  type: 'event',
	},
	{
	  name: 'Approval',
	  inputs: [
		{ type: 'address', name: '_owner', indexed: true },
		{ type: 'address', name: '_spender', indexed: true },
		{ type: 'uint256', name: '_value', indexed: false },
	  ],
	  anonymous: false,
	  type: 'event',
	},
	{
	  name: '__init__',
	  outputs: [],
	  inputs: [
		{ type: 'bytes32', name: '_name' },
		{ type: 'bytes32', name: '_symbol' },
		{ type: 'uint256', name: '_decimals' },
		{ type: 'uint256', name: '_supply' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'constructor',
	},
	{
	  name: 'deposit',
	  outputs: [],
	  inputs: [],
	  constant: false,
	  payable: true,
	  type: 'function',
	  gas: 74279,
	},
	{
	  name: 'withdraw',
	  outputs: [{ type: 'bool', name: 'out' }],
	  inputs: [{ type: 'uint256', name: '_value' }],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 108706,
	},
	{
	  name: 'totalSupply',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 543,
	},
	{
	  name: 'balanceOf',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [{ type: 'address', name: '_owner' }],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 745,
	},
	{
	  name: 'transfer',
	  outputs: [{ type: 'bool', name: 'out' }],
	  inputs: [
		{ type: 'address', name: '_to' },
		{ type: 'uint256', name: '_value' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 74698,
	},
	{
	  name: 'transferFrom',
	  outputs: [{ type: 'bool', name: 'out' }],
	  inputs: [
		{ type: 'address', name: '_from' },
		{ type: 'address', name: '_to' },
		{ type: 'uint256', name: '_value' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 110600,
	},
	{
	  name: 'approve',
	  outputs: [{ type: 'bool', name: 'out' }],
	  inputs: [
		{ type: 'address', name: '_spender' },
		{ type: 'uint256', name: '_value' },
	  ],
	  constant: false,
	  payable: false,
	  type: 'function',
	  gas: 37888,
	},
	{
	  name: 'allowance',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [
		{ type: 'address', name: '_owner' },
		{ type: 'address', name: '_spender' },
	  ],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 1025,
	},
	{
	  name: 'name',
	  outputs: [{ type: 'bytes32', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 723,
	},
	{
	  name: 'symbol',
	  outputs: [{ type: 'bytes32', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 753,
	},
	{
	  name: 'decimals',
	  outputs: [{ type: 'uint256', name: 'out' }],
	  inputs: [],
	  constant: true,
	  payable: false,
	  type: 'function',
	  gas: 783,
	},
]