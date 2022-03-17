//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("ERC20Token", "Token") {
        _mint(msg.sender, initialSupply * 10 ** uint256(decimals()));
        // _balances[address(this)] = uint256(-1); // No se puede enviar tokens a la dirección del contrato
        // _balances[address(0)] = uint256(-1); // No se puede enviar tokens a la dirección 0
    }
}

