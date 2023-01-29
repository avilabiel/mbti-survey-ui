import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";

export const theme = extendTheme({
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  config,
});
