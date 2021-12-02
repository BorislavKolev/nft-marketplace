import { Link, } from 'react-router-dom';

const Header = () => {
    return(
        <header className="transparent">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="de-flex sm-pt10">
                        <div className="de-flex-col">
                            <div className="de-flex-col">
                                <div id="logo">
                                    <a href="02_dark-index.html">
                                        <img alt="" src="images/logo-light.png" />
                                    </a>
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