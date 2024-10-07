import "@fontsource/ubuntu"; // Defaults to weight 400

inside main.jsx

src/Theme/index.js
- using extend theme for font (from chakra ui)
- ubuntu theme is needed to be passed to chkakra ui so we add theme = {theme}
- import { theme } from "./Theme/index.js";
- theme={theme},  // this theme(inside braces) is the theme which we are importing.