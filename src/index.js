import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import {Provider as AuthProvider} from './Context/Authentication'

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>
   ,
    document.getElementById("root"))