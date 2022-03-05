
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

const setToken = (userToken) => {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

const getToken = () => {
  sessionStorage.getItem('token');
}

function App() {

  const token = getToken();


  // if (!token)
  //   return (
  //     <div className='App'>
  //       <Login setToken={setToken} />
  //     </div>
  //   )

  return (
    <div className="App">
      <AdminNavbar />
      <Routes>
        <Route path='/' element={<MainContentAdmin />} />
        <Route path='/createAnnouncement' element={<AnnounceCreate />} />
      </Routes>
    </div>
  );
}

export default App;
