// The idea here is: 
//
// 1. Use the start and end indices sent by the contract to fetch the highlighted words
//
// 2. Use these highlighted words to generate the image we need
// as base64 encoded data, using something like https://stackoverflow.com/questions/67431666/p5-breaks-in-node-js
//
// 3. Bundle this all together as metadata to return to anyone requesting it.
//
// 4. Host this on IPFS so we can put the permanent uri in the SingatureNFT.sol contract. 