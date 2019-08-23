const Web3 = require('web3')
const rpcURL = '' // Your RPC URL goes here
const web3 = new Web3(rpcURL)
const address = '' // Your account address goes here

web3.eth.getBalance(address, (err, bal) => {
  const balance = bal
  console.log("Balance in wei: ", balance)
  
  const balanceInEther = web3.utils.fromWei(balance, 'ether')
  console.log("Balance in ether: ", balanceInEther)

  const balanceIngwei = web3.utils.fromWei(balance, 'gwei')
  console.log("Balance in gwei: ", balanceIngwei)

  const balanceInGwei = web3.utils.fromWei(balance, 'Gwei')
  console.log("Balance in Gwei: ", balanceInGwei)
})