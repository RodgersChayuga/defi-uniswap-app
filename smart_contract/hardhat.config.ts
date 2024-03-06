import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/vEdRIZ1LCKRqRPPIWtBFcmVaaeRe8ob5",
      accounts: [
        "59a22f27341c75048b6f62b3c00c5107d6247b4a632757ebbb430423df60562d",
      ],
    },
  },
};

export default config;
