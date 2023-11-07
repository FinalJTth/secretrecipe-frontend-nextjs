"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  Box,
  ChakraProvider,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Header from "./header";
import Theme from "../themes";
import "./scroller.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={Theme}>
        <Header />
        <Box height="calc(100vh - 50px)" id="scroller">
          <Box bg="inherit" minH="100%" py="12" px={{ sm: "6", lg: "8" }}>
            {children}
          </Box>
        </Box>
      </ChakraProvider>
    </CacheProvider>
  );
}
