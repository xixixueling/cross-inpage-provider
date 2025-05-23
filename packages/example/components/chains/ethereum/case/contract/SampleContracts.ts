// Contracts for Malicious Transactions in different chains
export const NETWORKS_BY_CHAIN_ID = {
  137: 'polygon',
  10: 'optimism',
  56: 'bsc',
  43114: 'avalanche',
  42161: 'arbitrum',
  11155111: 'sepolia',
  8453: 'base',
  204: 'opBnb',
  1: 'mainnet',
};

export const checkSupportNetwork = (chainId: number) => {
  return NETWORKS_BY_CHAIN_ID[chainId as keyof typeof NETWORKS_BY_CHAIN_ID];
};

export const getSupportNetworkNames = () => {
  return Object.values(NETWORKS_BY_CHAIN_ID);
};

export const ERC20_USDC_CONTRACTS = {
  polygon: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  optimism: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
  bsc: '0x8965349fb649A33a30cbFDa057D8eC2C48AbE2A2',
  avalanche: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  arbitrum: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
  sepolia: '0x27A56df30bC838BCA36141E517e7b5376dea68eE',
  base: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  opBnb: '0x9e5aac1ba1a2e6aed6b32689dfcf62a509ca96f3',
  mainnet: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
};

export const ERC721_SAMPLE_CONTRACTS = {
  polygon: '0x9e8ea82e76262e957d4cc24e04857a34b0d8f062',
  optimism: '0xaf18644083151cf57f914cccc23c42a1892c218e',
  bsc: '0xebfbfd7c41b123500fb16b71c43b400c12b08be0',
  avalanche: '0x880f7e04D722e305126F7E1efd3434A7d5b1465c',
  arbitrum: '0x8659a4876369b94515a86048fe7f99daba6b9a7d',
  sepolia: '0xbba60aa8144579e07c6db64121b0f608ab6f0c89',
  base: '0x90997fc967e75b7e69f899133aab31d197beb802',
  opBnb: '0x61d7e121185b1d7902a3da7f3c8ac9faaee8863b',
  mainnet: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
};

export const WRAPPED_NATIVE_TOKEN = {
  mainnet: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
  optimism: '0x4200000000000000000000000000000000000006', // WETH
  bsc: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // WBNB
  polygon: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
  base: '0x4200000000000000000000000000000000000006', // WETH
  sepolia: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9', // WETH
  arbitrum: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
  avalanche: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', // WAVAX
  opBnb: '0x4200000000000000000000000000000000000006', // WBNB
};

export const MALICIOUS_CONTRACT_ADDRESSES = {
  mainnet: '0x000062Accd1a9d62eF428eC86cA3dD4f45120000',
  default: '0x00008F1149168C1D2fa1eBa1Ad3e9cD644510000',
};

export const MALICIOUS_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
