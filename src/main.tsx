import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./hooks/useAuth.tsx";
import { FileProvider } from "./hooks/useFile.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <FileProvider>
        <App />
      </FileProvider>
    </AuthProvider>
  </React.StrictMode>
);
