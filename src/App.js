
import './App.css';
import { Button } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />

      </Routes>
    </div>
  );
}

export default App;
