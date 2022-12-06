import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <TaskContextProvider>
         {/* Usamos el context de Taskcontext, ahora todo el App esta dentro de un contexto */}
         <App />
      </TaskContextProvider>
   </React.StrictMode>
);
