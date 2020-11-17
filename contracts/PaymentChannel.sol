pragma solidity 0.6.2;

contract PaymentChannel {

    address public sender;
    address public recipient;
    uint256 public expiration;

    constructor (address _recipient, uint256 duration) public payable {
        sender = msg.sender;
        recipient = _recipient;
        expiration = now + duration;
    }

    function getExpiration() public view returns (uint256) {
        return expiration;
    }

}
