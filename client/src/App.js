import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Explore from './components/Explore';
import Create from './components/Create';
import Logout from './components/Logout';
import Details from './components/Details';
import Edit from './components/Edit';
import Profile from './components/Profile';


function App() {
  return (
    <AuthProvider>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/details/:nftId" element={<Details />} />
        <Route path="/edit/:nftId" element={<Edit />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
