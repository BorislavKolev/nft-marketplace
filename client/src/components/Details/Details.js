const Details = () => {
    return(
        <div className="page-section">
            <p></p>
            <p></p>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="img-fluid text-center">
                <img src="/img/bg_image_2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 py-3 pr-lg-5">
              <h2 className="title-section">Dormant Dragon 4029</h2>
              <div className="divider"></div>
              <p>Its gonna smoke you!</p>
              <div class="post-date">
                  <span class="icon">
                    <span class="mai-cash-outline"></span>
                  </span> <a>Price: 0.5 ETH</a>
                </div>
               
              <a href="#" className="btn btn-primary border ml-1">Like</a>
              <a href="#" className="btn btn-primary border ml-1">Buy</a>
              <a href="#" className="btn btn-outline border ml-1">Edit</a>
              <a href="#" className="btn btn-outline border ml-1">Delete</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Details;