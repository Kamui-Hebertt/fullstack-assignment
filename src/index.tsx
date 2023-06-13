import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AgentsProvider from "./context/AgentsProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Home from './components/Home/Home';
import AgentForm from "./components/AgentForms/AgentForms";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AgentsProvider>        
        <Routes>
          <Route element={ <App /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='/registerAgent' element={ <AgentForm /> } />
          </Route>
        </Routes>
      </AgentsProvider>    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
