import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LogIn from "./view/Authentication/LogIn";
import SignUp from "./view/Authentication/SignUp";
import BoardList from "./view/BoardMain/list";
import BoardForm from "./view/BoardMain/save";
import BoardSeb from "./view/BoardSeb";
import NotFoundPage from "./view/NotFoundPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/board/list" element={<BoardList />} />
        <Route path="/board/story" element={<BoardSeb />} />
        <Route path="/board/save" element={<BoardForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();