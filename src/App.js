import './App.css';
import Dashboard from './Pages/Dashboard';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import Nav from './Layouts/Nav';
import { Container } from 'semantic-ui-react';
import AdminDashBoard from './Pages/AdminDashBoard';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  // const user = localStorage.getItem("user")
  const userType = 2;
  return (
    <div className="App">
       <ToastContainer position="bottom-right" />
      {
        userType == 1 ?
          <AdminDashBoard /> :
          <>
            <Nav />
            <Container>
              <Dashboard />
            </Container>
          </>
      }
    </div>
  );
}

export default App;
