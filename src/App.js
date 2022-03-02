import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Members from './Members';

function App() {
  return (
    <div className="App">
      <h1 className='myFont' >Welcome to the App</h1>
      <BrowserRouter>
      <div className='row'>
      <Link to='/register' className='btn btn-secondary m-2 col-4 myBTN' >Register</Link>
      <Link to='/login' className='btn btn-secondary m-2 col-4 myBTN'>Login</Link>
      <Link to='/members' className='btn btn-secondary m-2 col-3 myBTN'>Current Member</Link> <br />

      </div>

      
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/members' element={<Members />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
