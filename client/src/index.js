import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css'
import Header from './components/Header';
import VideoForm from './components/VideoForm'
import AiStatus from './components/AiStatus';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex flex-col w-full h-auto bg-slate-600 min-h-screen gap-5 items-center">
        <Header />
        <VideoForm />
        <AiStatus />
    </div>
  </React.StrictMode>
);

