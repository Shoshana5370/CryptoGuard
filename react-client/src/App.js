import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import router from "./router";
const theme = createTheme({
    palette: { mode: "light" },
});
function App() {
    return (_jsx(ThemeProvider, { theme: theme, children: _jsxs(LocalizationProvider, { dateAdapter: AdapterDateFns, children: [_jsx(CssBaseline, {}), _jsx(RouterProvider, { router: router })] }) }));
}
export default App;
