require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera foot alien recipe place method coral light army gasp'; 
let testAccounts = [
"0xf1e28714d343f79fbf20193efac3fc6b62c7bcaee36101f89d4d72fe082b44e0",
"0x393b1cec267879d473cd8abac68f8b95d1c2f7633314b2fc1755a225da7ef8bc",
"0xfdfb9265af9bbcd3ba09a9cd4cc3c6dc2272be708f037ca7d81e170cff306c43",
"0x69bf4fed29e3e1e9a4a76b68e78df39cb3f7957839036a88a0b11395bb5237cb",
"0x65cb635230780161cd576c37b962220aab8dd0f1552dbca3d31b69f9f36a9049",
"0x881440cc3d075685642bc7a9157fa628393dc6711043799d63628c85dc705fe0",
"0xcd1248d8678b231c2fc29eba67ddc0374eb7be5ba8ee0d58a844ba57321526db",
"0x1de2b4143c544486668ca70a6cc059d9a51ab4a979559021424ba5864d4b903c",
"0x85e43002d367938c47febe84218a0a664b0dc63734057caf59f7a3f48c6ef573",
"0xf6d85b6c19e85168b421548087e3cb54e357961820b0b7d42705e63e9f9353d3"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
