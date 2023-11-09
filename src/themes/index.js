// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// Global style overrides
import globalStyles from "./globalstyle";
// Foundational style overrides
// import borders from './foundations/borders'
// Component style overrides
import Button from "./components/button";
import Input from "./components/input";

export const overrides = {
  /*
  styles: {
    global: globalStyles.global,
  },
  */
  // borders,
  // Other foundational style overrides go here
  components: {
    Button,
    Input,
    // Other components go here
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
};

const theme = extendTheme(overrides);

export default theme;
