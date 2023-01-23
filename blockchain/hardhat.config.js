require( "@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */


require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
const privatekey1="1cda7e250cd8555e3b0d0edb4aed435b65f648d020085a689400cf491f54b85b"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [privatekey1]
    },
    BSCscan: {
      url: "https://rpc.ankr.com/bsc",
      accounts: [privatekey1]
    },
    Sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [privatekey1]
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };
module.exports = {
    // ...rest of your config...
    networks: {
      goerli: {
        url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        accounts: [GOERLI_PRIVATE_KEY],
      },
    },
  };
  