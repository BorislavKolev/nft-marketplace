import { useContext } from 'react';
import { Link, } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
const Header = () => {
    const { user } = useContext(AuthContext);

    let guestNavigation = (
        <>
            <li>
                <Link to="/login">Login<span></span></Link>
            </li>
            <li>
                <Link to="/register">Register<span></span></Link>
            </li>
        </>
    );

    let userNavigation = (
            <li>
                <Link to="/logout">Logout<span></span></Link>
            </li>
    );

    return (
        <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    <div id="logo">
                                        <Link to="/">
                                            <img alt="" src="/images/logo-light.png" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="de-flex-col">
                                    <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                        <Link to="/">Home<span></span></Link>
                                    </li>
                                    <li>
                                        <Link to="/explore">Explore<span></span></Link>
                                    </li>

                                    {user.email
                                        ? userNavigation
                                        : guestNavigation
                                    }
                                </ul>
                                <div className="menu_side_area">
                                    <Link to="/create" className="btn-main btn-wallet"><i className="icon_wallet_alt"></i><span>Create NFT</span></Link>
                                    <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;