import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Account';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from './pages/Register';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
