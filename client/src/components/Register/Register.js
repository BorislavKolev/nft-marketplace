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
        <div class="no-bottom no-top" id="content">
        <div id="top"></div>
        
        <section id="subheader" class="text-light" data-bgimage="url(images/background/subheader-dark.jpg) top">
                <div class="center-y relative text-center">
                    <div class="container">
                        <div class="row">
                            
                            <div class="col-md-12 text-center">
                                <h1>Register</h1>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
        </section>
        

        <section aria-label="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <h3>Don't have an account? Register now.</h3>
                        
                        <div class="spacer-10"></div>
                        
                        <form name="contactForm" id='contact_form' class="form-border"  method="POST" onSubmit={registerSubmitHandler}>

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="field-set">
                                        <label>Username:</label>
                                        <input type='text' name='username' id='username' class="form-control"/>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="field-set">
                                        <label>Email Address:</label>
                                        <input type='text' name='email' id='email' class="form-control"/>
                                    </div>
                                </div>                      

                                <div class="col-md-6">
                                    <div class="field-set">
                                        <label>Password:</label>
                                        <input type='text' name='password' id='password' class="form-control"/>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="field-set">
                                        <label>Re-enter Password:</label>
                                        <input type='text' name='repassword' id='repassword' class="form-control"/>
                                    </div>
                                </div>


                                <div class="col-md-12">

                                    <div id='submit' class="pull-left">
                                        <input type='submit' id='send_message' value='Register Now' class="btn btn-main color-2"/>
                                    </div>

                                    <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                    <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                    <div class="clearfix"></div>

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