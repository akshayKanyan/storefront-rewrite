import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

const theme = {
  fonts: {
    h1: 38,
    h2: "30px",
    h3: "20px",
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
