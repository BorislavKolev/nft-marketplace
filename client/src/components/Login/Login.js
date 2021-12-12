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
                console.log(authData);
                login(authData);

                navigate('/');
            })
            .catch(err => {
                // TODO: Error notification
                console.log(err);
            });
    }

    return(
        <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        
        <section className="full-height relative no-top no-bottom vertical-center" data-bgimage="url(/images/background/subheader-dark.jpg) top" data-stellar-background-ratio=".5">
            <div className="overlay-gradient t50">
                <div className="center-y relative">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 text-light wow fadeInRight" data-wow-delay=".5s">
                            <div className="spacer-10"></div>
                            <h1>Create, sell or collect digital items.</h1>
                            
                        </div>
                            
                            <div className="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
                                <div className="box-rounded padding40" data-bgcolor="#21273e">
                                    <h3 className="mb10">Sign In</h3>
                                    <p>Login using an existing account or create a new account <a href="register.html">here<span></span></a>.</p>
                                    <form name="contactForm" id='contact_form' className="form-border" method="POST" onSubmit={onLoginHandler}>

                                        <div className="field-set">
                                            <input type='text' name='email' id='email' className="form-control" placeholder="email"/>
                                        </div>
                                        
                                         <div className="field-set">
                                            <input type='password' name='password' id='password' className="form-control" placeholder="password"/>
                                        </div>
                                        
                                        <div className="field-set">
                                            <input type='submit' id='send_message' value='Submit' className="btn btn-main btn-fullwidth color-2"/>
                                        </div>
                                        
                                        <div className="clearfix"></div>
                                        
                                        <div className="spacer-single"></div>

                                    
                            </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>		
        
        </div>
    );
}

export default Login;