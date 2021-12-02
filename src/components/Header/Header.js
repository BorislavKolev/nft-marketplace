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
                                    <a href="02_dark-index.html">Home<span></span></a>
                                    <ul>
                                        <li><a href="03_grey-index.html">New: Grey Scheme</a></li>
                                        <li><a href="02_dark-index.html">Homepage 1</a></li>
                                        <li><a href="02_dark-index-2.html">Homepage 2</a></li>
                                        <li><a href="02_dark-index-3.html">Homepage 3</a></li>
                                        <li><a href="02_dark-index-4.html">Homepage 4</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="02_dark-explore.html">Explore<span></span></a>
                                    <ul>
                                        <li><a href="02_dark-explore.html">Explore</a></li>
                                        <li><a href="02_dark-explore-2.html">Explore 2</a></li>
                                        <li><a href="02_dark-collection.html">Collections</a></li>
                                        <li><a href="02_dark-live-auction.html">Live Auction</a></li>
                                        <li><a href="02_dark-item-details.html">Item Details</a></li>
                                        <li><a href="02_dark-help-center.html">Help Center</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Pages<span></span></a>
                                    <ul>
                                        <li><a href="02_dark-author.html">Author</a></li>
                                        <li><a href="02_dark-wallet.html">Wallet</a></li>
                                        <li><a href="02_dark-profile.html">Profile</a></li>
                                        <li><a href="02_dark-create-options.html">Create</a></li>
                                        <li><a href="02_dark-news.html">News</a></li>
                                        <li><a href="02_dark-gallery.html">Gallery</a></li>
                                        <li><a href="02_dark-login.html">Login</a></li>
                                        <li><a href="02_dark-login-2.html">Login 2</a></li>
                                        <li><a href="02_dark-register.html">Register</a></li>
                                        <li><a href="02_dark-contact.html">Contact Us</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Stats<span></span></a>
                                    <ul>
                                        <li><a href="02_dark-activity.html">Activity</a></li>
                                        <li><a href="02_dark-rankings.html">Rankings</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Elements<span></span></a>
                                    <ul>
                                        <li><a href="02_dark-icons-elegant.html">Elegant Icons</a></li>
                                        <li><a href="02_dark-icons-etline.html">Etline Icons</a></li>
                                        <li><a href="02_dark-icons-font-awesome.html">Font Awesome Icons</a></li>
                                        <li><a href="02_dark-accordion.html">Accordion</a></li> 
                                        <li><a href="02_dark-alerts.html">Alerts</a></li>
                                        <li><a href="02_dark-counters.html">Counters</a></li>
                                        <li><a href="02_dark-modal.html">Modal</a></li>
                                        <li><a href="02_dark-popover.html">Popover</a></li>
                                        <li><a href="02_dark-pricing-table.html">Pricing Table</a></li>
                                        <li><a href="02_dark-progress-bar.html">Progress Bar</a></li>
                                        <li><a href="02_dark-tabs.html">Tabs</a></li>
                                        <li><a href="02_dark-tooltips.html">Tooltips</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="menu_side_area">
                                <a href="02_dark-wallet.html" className="btn-main btn-wallet"><i className="icon_wallet_alt"></i><span>Connect Wallet</span></a>
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