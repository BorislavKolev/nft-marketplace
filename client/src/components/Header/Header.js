import { useContext } from 'react';
import { Link, } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
const Header = () => {
  const { user } = useContext(AuthContext);

  let guestNavigation = (
    <>
      <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">Register</Link>
      </li>
    </>
  );

  let userNavigation = (
    <li className="nav-item">
      <Link to="/logout" className="nav-link">Logout</Link>
    </li>
  );

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-float">
        <div className="container">
          <Link to="/" className="navbar-brand">NFT<span className="text-primary">marketplace.</span></Link>

          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarContent">
            <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/explore" className="nav-link">Explore</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create NFT</Link>
              </li>
              {user.email
                ? userNavigation
                : guestNavigation
              }

            </ul>
            {user.email
              ?
              <div className="ml-auto">
                <Link to={`/profile/${user._id}`} className="btn btn-outline rounded-pill">My Profile</Link>
              </div>
              :
              <></>
            }

          </div>
        </div>
      </nav>


    </header>

  );
}

export default Header;