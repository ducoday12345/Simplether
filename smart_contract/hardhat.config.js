//vGhAOWZ2OS13anc1nJ6C9DTrothThJ2D
//wss://eth-ropsten.alchemyapi.io/v2/vGhAOWZ2OS13anc1nJ6C9DTrothThJ2D
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/vGhAOWZ2OS13anc1nJ6C9DTrothThJ2D',      
      accounts: [ '3a1b9999b81074963d3108b70c406ac0d991e804490fee24ff873b08d329c535' ] 
    }
  }
}
