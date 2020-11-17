const PaymentChannel = artifacts.require("./PaymentChannel.sol");

const DURATION = 10000;

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(PaymentChannel, accounts[1], DURATION);
};
