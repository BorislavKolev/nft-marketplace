import { useContext } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';


const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { username, email, password, repassword } = Object.fromEntries(new FormData(e.currentTarget));

        try {
            authService.register(username, email, password, repassword)   
            .then(authData => {
                login(authData);
                
                navigate('/');
            });
        } catch (error) {
            console.log(error.message);
        }
       
    }
    return(
        <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
         
            <div className="col-lg-6 py-3">
              <div className="subhead">If you dont have an account...</div>
              <h2 className="title-section">Register</h2>
              <div className="divider"></div>
              
              <form method="POST" onSubmit={registerSubmitHandler}>
              <div className="py-2">
                  <input type='text' name='username' id='username' className="form-control" placeholder="Username"/>
                </div>
                <div className="py-2">
                  <input type='text' name='email' id='email' className="form-control" placeholder="Email"/>
                </div>
                <div className="py-2">
                  <input type='password' name='password' id='password' className="form-control" placeholder="Password" />
                </div>
                <div className="py-2">
                  <input type='password' name='repassword' id='repassword' className="form-control" placeholder="Repeat Password" />
                </div>
                <button type="submit" className="btn btn-primary rounded-pill mt-4">Register</button>
              </form>
            </div>
          </div>
        </div> 
      </div> 
    );
}

export default Register;