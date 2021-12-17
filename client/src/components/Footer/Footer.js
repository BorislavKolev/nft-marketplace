import './Footer.css';

const Footer = () => {
    return(
        <footer className="page-footer">
        <div className="container">
          <div className="row justify-content-center mb-1">
            <div className="col-lg-3 py-1">
              <h3>NFT<span className="text-primary">marketplace.</span></h3>
            </div>
            <div className="col-lg-3 py-1">
            
            </div>
            <div className="col-lg-3 py-1">
    
            </div>
            <div className="col-lg-3 py-1">
          
              <div className="sosmed-button mt-1">
                <a href="https://www.facebook.com/SharWinchester/"><span className="mai-logo-facebook-f"></span></a>
                <a href="https://github.com/BorislavKolev"><span className="mai-logo-github"></span></a>
                <a href="https://www.linkedin.com/in/borislavkolev/"><span className="mai-logo-linkedin"></span></a>
              </div>
            </div>
          </div>
    
          <div className="row">
            <div className="col-sm-12 py-1">
              <p id="copyright">&copy; 2021 <a href="https://github.com/BorislavKolev">Borislav Kolev</a>. All rights reserved</p>
            </div>
          </div>
        </div> 
      </footer> 
    );
}

export default Footer;