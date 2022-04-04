
import './App.css';

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
// import AnnouncmentsPage from './components/routes/AnnouncmentsPage';
import SiteCreations from './components/routes/SiteCreations';
import React, { Suspense, useEffect, useState } from 'react';
import AdminNav from './components/AdminNav';
import SitesPage from './components/routes/SitesPage';


const AnnouncmentsPage = React.lazy(() => import('./components/routes/AnnouncmentsPage'))

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
      <AdminNav />
      <Routes>
        <Route path='/' element={<MainContentAdmin />} />
        <Route path='/createAnnouncement' element={<AnnounceCreate />} />
        <Route path='/sites' element={<SitesPage />} />
        <Route path='/Announcments' element={
          <Suspense fallback={<div>Loading ..</div>}>
            <AnnouncmentsPage />
          </Suspense>
        } />
        <Route path='/createSite' element={<SiteCreations />} />
      </Routes>
    </div>
  );
}

export default App;
