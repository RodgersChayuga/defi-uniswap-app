import { createWalletClient } from "viem";
import { formatEther, parseEther } from "viem";
import hre from "hardhat";

// Import your contract's ABI
import { TransactionsABI } from '../artifacts/contracts/Transactions.sol/Transactions.json';



async function main() {
  // Create a wallet client
  const walletClient = await createWalletClient();

  // Deploy the contract
  const transactionContract = await walletClient.deployContract({
    abi: TransactionsABI, // Use the imported ABI
    bytecode: (await hre.artifacts.readArtifact("Transactions")).bytecode, // Get bytecode from artifacts
  });

  // Wait for deployment completion (not strictly required in Viem, but recommended)
  await walletClient.waitForTransactionReceipt({
    hash: transactionContract.hash,
  });

  console.log("Transactions deployed to:", transactionContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
