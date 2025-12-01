import { ReactNode } from "react";
import AppKitProvider from "./appkit";

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <AppKitProvider>{children}</AppKitProvider>
    </>
  );
}

export default ContextProvider;
