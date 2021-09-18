const Web3 = require('web3');
const web3 = new Web3();

const account = web3.eth.accounts.create(); //sync


const signTransaction = async () => {
  const tbsTx = {
    to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
    value: '1000000000',
    gas: 2000000,
    gasPrice: '234567897654321',
    nonce: 0,
    chainId: 1
    };

    const sTx = await account.signTransaction(tbsTx);
    //console.log(sTx);
    const acc = web3.eth.accounts.recoverTransaction(sTx.rawTransaction);
    console.log(account.address, acc);

    const store = web3.eth.accounts.encrypt(account.privateKey,"hola12345");
    console.log(store);
}


signTransaction();


