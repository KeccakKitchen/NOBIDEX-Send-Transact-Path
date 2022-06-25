  require("@nomiclabs/hardhat-waffle");

  module.exports = {
    solidity: '0.8.0',
    networks: {
      rinkeby: {
        url: 'https://eth-rinkeby.alchemyapi.io/v2/AY7FnCjlptd6_KwwCYJuzkoT7sKsHBd1',
        accounts: [ '97d8b231fe94c1588c2543b9ea83da3e27f64a33888f2fb32c26cb59b93968a9' ]
      }
    }
  }