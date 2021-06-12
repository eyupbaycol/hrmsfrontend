import './App.css';
import Dashboard from './Pages/Dashboard';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import Nav from './Layouts/Nav';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
        <Nav />
        <Container>
         <Dashboard/>
      </Container>  
    </div>
  );
}

export default App;
