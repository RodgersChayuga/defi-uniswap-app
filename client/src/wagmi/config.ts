import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "b31d4c30fc72833f91e1830be452aa5a";

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [mainnet.id]: http("https://eth.drpc.org"),
    [sepolia.id]: http("https://sepolia.drpc.org"),
  },
});
