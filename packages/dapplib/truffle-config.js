require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note rifle column hidden entry bubble sketch'; 
let testAccounts = [
"0x88deca2c05c0f2fe841f6ccc7e7b0bf752fa4eb728a2e6d6fefccda94690d599",
"0xbacb042feff5b8869e03a4783e7b32a5eb4bbc7f8311af62ec82709f50740941",
"0x080579679f8fa651646e082c0cee65fd8fed7c2d4981bc6aac72ee91bdbe76e9",
"0x053dd185faac6c0998cfec2aa16b71f9d7cc731591b89bed60835ecbbe3d64fb",
"0x5a1537b901d1a14f8f75d0e8a6cc3a377b8c755aa04550f1edd57bf254d5d28e",
"0x96473b97f9e944ec9677fc8e18e7bd9644d4ac5f9f744d76e66f31f183fb1c0f",
"0x2108370aaf0267c8cacb4c3c231751ced2c9a02eaab52477b7c9fb463c05b577",
"0x60c33285f36ef91ddf434d8661ebad529c98d3999331e9ff0469d2df6f4d47fe",
"0xf2aa09aba286ae48069742450493ebf0d8c6074a7e92792deb6fabe74948c14f",
"0xe9ccf9c8a912c05046d846170a4d4246dd16d4ec2a510ada4ae93a92e3fcf6b8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
