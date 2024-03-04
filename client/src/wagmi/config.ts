import { http, createConfig, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "b31d4c30fc72833f91e1830be452aa5a";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [metaMask(), injected(), walletConnect({ projectId }), safe()],
  transports: {
    [mainnet.id]: http("https://eth.drpc.org"),
    [sepolia.id]: http("https://sepolia.drpc.org"),
  },
});
