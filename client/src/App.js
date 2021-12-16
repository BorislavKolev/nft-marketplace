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
import GuardedRoute from './components/Common/GuardedRoute';
import PrivateRoute from './components/Common/PrivateRoute';
import ErrorBoundary from './components/Common/ErrorBoundary';


function App() {
  return (
    <ErrorBoundary>
    <AuthProvider>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/details/:nftId" element={<Details />} />
        <Route path="/profile/:userId" element={<PrivateRoute><Profile /></PrivateRoute>} />

        <Route element={<GuardedRoute />}>
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:nftId" element={<Edit />} />
        </Route>
      </Routes>

      <Footer />
    </div>
    </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
