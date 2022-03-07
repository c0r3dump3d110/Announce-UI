
import './App.css';
import PanelComp from './components/PanelComp';
import AdminNavbar from './components/AdminNavbar'
import Login from './components/Login/Login';
import MainContentAdmin from './components/MainContentAdmin';
import RouterHeader from './components/RouterHeader';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AnnounceCreate from './components/routes/AnnounceCreate';
import RegisterPage from './components/routes/RegisterPage';
import AnnouncmentsPage from './components/routes/AnnouncmentsPage';
import SiteCreations from './components/routes/SiteCreations';
import { useEffect, useState } from 'react';

const setToken = (userToken) => {
  localStorage.setItem('token', JSON.stringify(userToken))
}

const getToken = () => {
  return localStorage.getItem('token');
}

function App() {

  const token = getToken(); 

  if (!token) {
    return (
      <div className='App'>

        <Routes>
          <Route path='/' element={<Login setToken={setToken} />} />
          <Route path='/Register' element={<RegisterPage />} />
        </Routes>

      </div>
    )
  }


  return (
    <div className="App">
      <AdminNavbar />
      <Routes>
        <Route path='/' element={<MainContentAdmin />} />
        <Route path='/createAnnouncement' element={<AnnounceCreate />} />
        <Route path='/Announcments' element={<AnnouncmentsPage />} />
        <Route path='/createSite' element={<SiteCreations />} />
      </Routes>
    </div>
  );
}

export default App;
