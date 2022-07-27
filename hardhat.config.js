require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const {infuraProjectId, privateKey, etherscanAPIkey} = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: {
//     version: "0.8.7",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 2000
//       }
//     }
//   }
// };

module.exports = {

  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey]
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanAPIkey
  },
  solidity: {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000
          }
        }
      }
};
