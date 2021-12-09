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

        nftService.create({
            title,
            description,
            imageUrl,
            creator: user._id,
            owner: user._id,
            favourites: [],
        }, user.accessToken)
            .then(result => {
                navigate('/explore');
            })
    }
    
    return (
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>

            <section id="subheader" className="text-light" data-bgimage="url(images/background/subheader-dark.jpg) top">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 text-center">
                                <h1>Create Single Collectible</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>


            <section aria-label="section">
                <div className="container">
                    <div className="row wow fadeIn">
                        <div className="col-lg-10 offset-lg-1">
                            <form id="form-create-item" className="form-border" method="POST" onSubmit={onNftCreate}>
                                <div className="field-set">



                                    <h5>Title</h5>
                                    <input type="text" name="title" id="title" className="form-control" placeholder="e.g. 'Crypto Funk'" />

                                    <div className="spacer-20"></div>

                                    <h5>Description</h5>
                                    <textarea data-autoresize name="description" id="description" className="form-control" placeholder="e.g. 'This is very limited item'"></textarea>

                                    <div className="spacer-20"></div>

                                    <h5>Image Url</h5>
                                    <textarea data-autoresize name="imageUrl" id="imageUrl" className="form-control" placeholder="e.g. 'https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FGHMFCBDIVHB3N6PSB7GNB53NM.png'"></textarea>

                                    <div className="spacer-20"></div>

                                    <input type="submit" id="submit" className="btn-main" value="Create Item"/>
                                

                                </div>
                            </form>
                        </div>


                    </div>
                </div>

            </section>

        </div>
    );
}

export default Create;