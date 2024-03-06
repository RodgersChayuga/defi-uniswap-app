import hre from "hardhat";

async function main() {
  const transactionContract = await hre.viem.deployContract("Transactions");
  console.log(
    "Transaction.sol contract deployed to:",
    transactionContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
