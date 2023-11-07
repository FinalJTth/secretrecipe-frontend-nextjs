"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./header";
import Theme from "../themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={Theme}>
        <Header />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
