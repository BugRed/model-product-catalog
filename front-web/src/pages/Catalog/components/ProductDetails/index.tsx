import React from "react";
import { useParams } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg'
import './style.scss';
import { Link } from 'react-router-dom'

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    
    const { productId } = useParams();
    console.log(productId)

    return (
        <div className="product-detail-container">
            <div className="card-base border-radius-20 product-details">
                <Link to="/products" className="product-details-link">
                    <ArrowIcon className="icon-goback"/>
                    <h1>Productpow</h1>
                </Link>
                
            </div>
            
        </div>
    )

};

export default ProductDetails;