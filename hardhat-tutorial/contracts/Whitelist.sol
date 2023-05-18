// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Whitelist {
    //uint256
    uint8 public maxwhilelistAddresses; // 최대 허용 가능한 화이트리스트 수

    // 화이트리스트에 등록된 지갑 주소(화리 등록시 값이 True)
    mapping(address => bool) public whilelistAddresses;

    // 실제 화리에 등록한 지갑 수
    uint public numAddressesWhilelisted;

    constructor(uint8 _maxWhilelistAddress)
    {
        maxwhilelistAddresses = _maxWhilelistAddress;
    }

    function addAddressToWhitelist() public {
        require(!whilelistAddresses[msg.sender], "Address was already whilelisted");
    
        // 허용 가능한 최대 인원수보다 더 많은 사람들이 화리에 등록하려 할때 에러처리
        //Error(string)이 생성되는 경우 require(x) 에서 x 조건이 false일 경우 
        require(numAddressesWhilelisted < maxwhilelistAddresses, "Max whilelist addresses already registered");

        // 화리에 등록시킬 주소를 맵에 추가, 키는 지갑주소, 값은 true
        whilelistAddresses[msg.sender] = true;
        // 화리에 등록된 지갑수 추가
        numAddressesWhilelisted += 1;
    }

}