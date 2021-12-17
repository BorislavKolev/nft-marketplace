import { useNavigate } from 'react-router-dom';
import * as nftService from '../../services/nftService';
import { useAuthContext } from '../../contexts/AuthContext';

const Create = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onNftCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('price');

        nftService.create({
            title,
            description,
            imageUrl,
            creator: user._id,
            owner: user._id,
            price,
            favourites: [],
            forSale: true,
        }, user.accessToken)
            .then(result => {
                navigate('/explore');
            })
    }
    
    return (
        <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
         
            <div className="col-lg-6 py-3">
              <div className="subhead">Let the world see your work...</div>
              <h2 className="title-section">Create NFT</h2>
              <div className="divider"></div>
              
              <form method="POST" onSubmit={onNftCreate}>
                <h5>Title</h5>
                <div className="py-2">
                  <input type='text' name='title' id='title' className="form-control" placeholder="'Crypto Funk'" required/>
                </div>
                <h5>Description</h5>
                <div className="py-2">
                  <textarea type='text' name='description' id='description' className="form-control" placeholder="'This is very limited item'" required/>
                </div>
                <h5>Image Url</h5>
                <div className="py-2">
                  <textarea type='text' name='imageUrl' id='imageUrl' className="form-control" placeholder="'https://***.png'" required/>
                </div>
                <h5>Price in ETH</h5>
                <div className="py-2">
                  <input type='number' name='price' id='price' className="form-control" min="0" step="any" placeholder="'0.5'" required/>
                </div>
                <button type="submit" className="btn btn-primary rounded-pill mt-4">Create</button>
              </form>
            </div>
          </div>
        </div> 
      </div> 
    );
}

export default Create;