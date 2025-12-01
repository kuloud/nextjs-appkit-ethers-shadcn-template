import { ReactNode } from "react";
import AppKitProvider from "./appkit";
import JotaiProvider from "./jotai";

function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <JotaiProvider>
        <AppKitProvider>{children}</AppKitProvider>
      </JotaiProvider>
    </>
  );
}

export default ContextProvider;
