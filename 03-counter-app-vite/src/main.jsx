import React from "react";
import reactDOM from "react-dom/client";
 
// import { HelloWorldApp } from './HelloWordApp';
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import './styles.css';

reactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 20 } />
    </React.StrictMode>
);