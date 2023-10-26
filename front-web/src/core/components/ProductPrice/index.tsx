import React from "react";
import "./style.scss"

type Props = {
    price: string;
}

const ProductPrice = ({ price }: Props) => (
    <div className="product-price-container">
        <span className="product-currency">R$</span>
        <h1 className="product-price">
            {price}
        </h1>
     </div>
);

export default ProductPrice