import { extendTheme } from "@chakra-ui/vue";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  // Define your Chakra UI theme here
});

export default theme;
