"use client";

import { createAppKit } from "@reown/appkit/react";
import { defaultNetwork, ethersAdapter, networks, projectId } from "@/config";
import { ReactNode } from "react";
import { ReownAuthentication } from "@reown/appkit-siwx";

const metadata = {
  name: "My Website",
  description: "Next.js Dapps Starter Template",
  url: "https://nextjs-appkit-ethers-shadcn-templat-nine.vercel.app", // origin must match your domain & subdomain
  icons: [
    "https://nextjs-appkit-ethers-shadcn-templat-nine.vercel.app/vercel.svg",
  ],
};

createAppKit({
  adapters: [ethersAdapter],
  metadata,
  networks,
  defaultNetwork,
  projectId,
  siwx: new ReownAuthentication(), // impletements custom SIWX authentication by DefaultSIWX
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

function AppKitProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default AppKitProvider;
