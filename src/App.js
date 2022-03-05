
import './App.css';
import PanelComp from './components/PanelComp';
import AdminNavbar from './components/AdminNavbar'
import Login from './components/Login/Login';
import MainContentAdmin from './components/MainContentAdmin';
import RouterHeader from './components/RouterHeader';

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

      <RouterHeader name="Dashboard" />
      <MainContentAdmin />
      {/* <PanelComp /> */}
    </div>
  );
}

export default App;
