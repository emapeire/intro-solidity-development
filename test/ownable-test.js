const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ownable", function () {

    beforeEach(async function () {
        [this.signer1, this.signer2] = await ethers.getSigners();
        this.Ownable = await ethers.getContractFactory("Ownable");
        this.ownable = await this.Ownable.deploy(this.signer2.address);
        await this.ownable.deployed();
    });

    it("Get correct owner", async function () {
        const owner = await this.ownable.owner();
        expect(owner).to.equal(this.signer2.address);
    });

    it("Only owner can transfer the ownership", async function () {
        await expect(this.ownable.transferOwnership(this.signer1.address))
        .to.be.revertedWith("Only owner can perform this action"); 
    });

    it("Emit ownership transfer event", async function () {
        await expect(this.ownable.connect(this.signer2).transferOwnership(this.signer1.address))
        .to.emit(this.ownable, "OwnershipTransferred") 
        .withArgs(this.signer2.address, this.signer1.address);
    });
});