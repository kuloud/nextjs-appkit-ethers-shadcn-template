import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { AppKitNetwork, bsc } from "@reown/appkit/networks";

// Get projectId at https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [bsc];
export const defaultNetwork: AppKitNetwork = bsc;

export const ethersAdapter = new EthersAdapter();
