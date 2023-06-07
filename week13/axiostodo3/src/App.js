import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { RecoilRoot } from "recoil";
function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        </RecoilRoot>
    );
}
export default App;
