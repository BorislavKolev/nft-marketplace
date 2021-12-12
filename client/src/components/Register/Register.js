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
        <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        
      
        <section id="subheader" className="text-light" data-bgimage="url(/images/background/subheader-dark.jpg) top">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-12 text-center">
                                <h1>Register</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
        </section>
        

        <section aria-label="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h3>Don't have an account? Register now.</h3>
                        
                        <div className="spacer-10"></div>
                        
                        <form name="contactForm" id='contact_form' className="form-border"  method="POST" onSubmit={registerSubmitHandler}>

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>Username:</label>
                                        <input type='text' name='username' id='username' className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>Email Address:</label>
                                        <input type='text' name='email' id='email' className="form-control"/>
                                    </div>
                                </div>                      

                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>Password:</label>
                                        <input type='text' name='password' id='password' className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="field-set">
                                        <label>Re-enter Password:</label>
                                        <input type='text' name='repassword' id='repassword' className="form-control"/>
                                    </div>
                                </div>


                                <div className="col-md-12">

                                    <div id='submit' className="pull-left">
                                        <input type='submit' id='send_message' value='Register Now' className="btn btn-main color-2"/>
                                    </div>

                                    <div id='mail_success' className='success'>Your message has been sent successfully.</div>
                                    <div id='mail_fail' className='error'>Sorry, error occured this time sending your message.</div>
                                    <div className="clearfix"></div>

                                </div>

                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
        
        
    </div>
    );
}

export default Register;