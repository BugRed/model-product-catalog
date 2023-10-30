import React from "react";
import "./style.scss"

type Props = {
    price: number;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {minimumFractionDigits:2}).format(price);
}

const ProductPrice = ({ price }: Props) => (
    <div className="product-price-container">
        <span className="product-currency">R$</span>
        <h1 className="product-price">
            {formatPrice(price)}
        </h1>
     </div>
);

export default ProductPrice