const PaymentChannel = artifacts.require("./PaymentChannel.sol");

const DURATION = 10000;

contract("Payment Channel test", async accounts => {
    it("Should check the expiration time is bigger than the duration", async () => {
        let paymentChannel = await PaymentChannel.deployed();
        let expiration = await paymentChannel.getExpiration.call();
        assert.isAbove(expiration.toNumber(), DURATION, "Expiration is greater than the Duration");
    });
});