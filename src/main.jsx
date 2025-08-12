import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { CourseContextProvider } from "./context/CourseContext.jsx";
import { SocketProvider } from "./context/SocketContext.jsx";

export const server = " https://vidyasetu-1.onrender.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </CourseContextProvider>
    </UserContextProvider>
  </StrictMode>
);
