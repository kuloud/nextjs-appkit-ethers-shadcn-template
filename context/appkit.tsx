"use client";

import { createAppKit } from "@reown/appkit/react";
import { defaultNetwork, ethersAdapter, networks, projectId } from "@/config";
import { ReactNode } from "react";
import { ReownAuthentication } from "@reown/appkit-siwx";

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
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
