import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './view/Authentication/SignUp';
import LogIn from './view/Authentication/LogIn';
import BoardSeb from './view/BoardSeb';
import NotFoundPage from './view/NotFoundPage';
import BoardMain from './view/BoardMain';
import BoardForm from './view/BoardMain/save';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/list" element={<BoardMain />} />
        <Route path="/board_story" element={<BoardSeb />} />
        <Route path="/board/save" element={<BoardForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
