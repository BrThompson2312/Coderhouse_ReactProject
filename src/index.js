import React from "react";
import ReactDOM from "react-dom/client";
// Components
import App from "./App";
// Methods
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyChJBiySefkvApmYPNEhQLyUHvtHuLGRec",
    authDomain: "ecommerce-react-a9005.firebaseapp.com",
    projectId: "ecommerce-react-a9005",
    storageBucket: "ecommerce-react-a9005.appspot.com",
    messagingSenderId: "1018906915793",
    appId: "1:1018906915793:web:db132edb5eeb907456a6f0"
};

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)