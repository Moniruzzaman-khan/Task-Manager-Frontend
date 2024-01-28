import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import "./assets/css/bootstrap.css"
import "./assets/css/animate.min.css"
import "./assets/css/style.css"
import "./assets/css/dropdownmenu.css"
import "./assets/css/progress.css"
import "./assets/css/sidebar.css"
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store/store.jsx";
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>
);