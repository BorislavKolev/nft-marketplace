import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Explore from './components/Explore';
import Create from './components/Create';
import Logout from './components/Logout';


function App() {
  return (
    <AuthProvider>
    <div id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
