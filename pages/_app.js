import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

const theme = {
  fonts: {
    h1: 38,
    h2: 30,
    h3: 20,
    p1: 18,
    p2: 16,
    p3: 14
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
