// Connecting locally
const Web3 = require('web3')
const web3 = new Web3('http://127.0.0.1:7545')

web3.eth.getBalance('' /* <-- local account here */, (err, wei) => {
  const balanceInWei = wei
  console.log("Balance in wei: ", balanceInWei)

  const balanceInEther = web3.utils.fromWei(wei, 'ether')
  console.log("Balance in ether: ", balanceInEther)

  const balanceInGwei = web3.utils.fromWei(wei, 'Gwei')
  console.log("Balance in Gwei: ", balanceInGwei)
})