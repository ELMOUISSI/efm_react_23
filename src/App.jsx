import './App.css';
import ListStagiaire from './component/ListStagiaire';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated import
import DetailStagiaire from  './component/DetailStagiaire'
import Header from './component/Header';
import AddStagiaire from './component/AddStagiaire';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/addstagiaire" element={<AddStagiaire />} />
            <Route path="/liststagiaire" element={<ListStagiaire />} />
           <Route path="detail/:namestg" element={<DetailStagiaire/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
