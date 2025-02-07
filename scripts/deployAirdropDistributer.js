const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const admin = deployer.address;
  const tokenAddress = "0xYourTokenAddress"; // Replace with your token contract address
  const merkleRoot = "0xYourMerkleRoot"; // Replace with your Merkle root
  const maximumTotalClaimable = ethers.utils.parseUnits("1000000", 18); // Replace with your maximum total claimable amount
  const windowStart = Math.floor(Date.now() / 1000); // Current time in seconds
  const windowEnd = windowStart + 30 * 24 * 60 * 60; // 30 days from now

  const MerkleAirdropDistributer = await ethers.getContractFactory("MerkleAirdropDistributer");
  const merkleAirdropDistributer = await MerkleAirdropDistributer.deploy(
    admin,
    tokenAddress,
    merkleRoot,
    maximumTotalClaimable,
    windowStart,
    windowEnd
  );

  await merkleAirdropDistributer.deployed();

  console.log("MerkleAirdropDistributer deployed to:", merkleAirdropDistributer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });