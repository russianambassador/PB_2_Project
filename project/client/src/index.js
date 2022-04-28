import { StrictMode } from "react/cjs/react.production.min";
import { render } from "react-dom";


import App from "./App.js"

render(
    <StrictMode>     
            <App />  
    </StrictMode>,
    document.getElementById('root')
);