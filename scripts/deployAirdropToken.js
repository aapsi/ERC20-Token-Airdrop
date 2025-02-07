const {ethers} = require("hardhat");

async function main() {


    const [deployer] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("AirdropToken");
    const token = await Token.deploy(deployer.address);

    console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
