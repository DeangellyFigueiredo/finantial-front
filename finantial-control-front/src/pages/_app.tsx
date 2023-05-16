import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@material-ui/core";
import { AppProps } from "next/app";
import TopBar from "../scenes/global/TopBar";
import { ColorModeContext, useMode } from "../themes";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as { toggleColorMode: () => void; }}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
        <div className="app">
            <main className="content">
                <TopBar/>
                <Component {...pageProps} />
            </main>
        </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  


  );
}
