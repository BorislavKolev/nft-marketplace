import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import * as authService from '../../services/authService';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
               
                login(authData);

                navigate('/');
            })
            .catch(err => {
                // TODO: Error notification
                console.log(err);
            });
    }

    return(
        <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
       
          <div className="col-lg-6 py-3">
            <div className="subhead">If you already have an account...</div>
            <h2 className="title-section">Login</h2>
            <div className="divider"></div>
            
            <form method="POST" onSubmit={onLoginHandler}>
              <div className="py-2">
                <input type='text' name='email' id='email' className="form-control" placeholder="Email"/>
              </div>
              <div className="py-2">
                <input type='password' name='password' id='password' className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary rounded-pill mt-4">Login</button>
            </form>
          </div>
        </div>
      </div> 
    </div> 
    );
}

export default Login;