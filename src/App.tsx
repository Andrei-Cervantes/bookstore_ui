import Router from "./shared/router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./shared/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
