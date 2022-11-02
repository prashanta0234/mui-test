import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#7B61FF",
      },
      secondary: {
        main: "#1A1A1A",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
