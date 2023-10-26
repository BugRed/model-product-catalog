import React from 'react';
import { ReactComponent as MainImage} from '../../core/assets/images/main-img.svg'
import { Link } from 'react-router-dom'

import './style.scss'
import Buttonicon from '../../core/components/Buttonicon';

const Home = () => (
    <div className="home-container">
        <div className="row home-content card-base border-radius-20">
            <div className="col-6 home-text">
                <h1 className='text-title'>
                    Discover the <br /> best  product catalog
                </h1>
                <p className='text-subtitle'>
                    We will help you find
                    the best <br /> products available on the market.
                </p>

                <Link to="/products" id='text-icon'>
                <Buttonicon text='Start your search' />
                </Link>
                
            </div>
            <div className="col-6">
                <MainImage className='main-image' />
            </div>
        </div>
    </div>
);

export default Home;
