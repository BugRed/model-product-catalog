import React, { useEffect, useState } from "react";
import './style.scss'
import ProductCard from "./components/ProductCard";
import { Link } from 'react-router-dom'
import { makeRequest } from "../../core/utils/request";
import { ProductResponse } from "../../core/types/Products";

const Catalog = () => {

    const [productsResponse, setProductsReponse] = useState<ProductResponse>();

    console.log(productsResponse?.content)

    useEffect(() => {
        const params ={
            page:0,
            linesPerPage: 12,
            
        }

        makeRequest({ url: '/products', params})
        .then(response => setProductsReponse(response.data));
    } ,[]);

    return (
    <div className="catalog-container">
        <h1 className="catalog-title">
            Product catalog
        </h1>
    <div className="catalog-products">
        {productsResponse?.content.map(product =>(
            <Link to="/products/1" key={product.id} className="link-product-card">
            <ProductCard product={product} />
            </Link>
        ))}
        
        
        
    </div>

    </div>
);}

export default Catalog;