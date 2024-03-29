const { ethers, upgrades } = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Box...");
    const box = await upgrades.deployProxy(Box, [42], { initializer: "store" });
    await box.deployed();
    console.log("Box deployed at", box.address);
}

main();