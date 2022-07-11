require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

const provider = new HDWalletProvider({ 
  privateKeys:[process.env.PK]
  ,providerOrUrl:'https://rpc.c4ei.net'}
  )

module.exports = {
  networks: {
    c4ei: {
      url: "https://rpc.c4ei.net",
      provider: provider,
      // host: "192.168.1.186",
      port: 21004,
      network_id: "21004" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
