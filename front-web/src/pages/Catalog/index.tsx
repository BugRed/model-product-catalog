import React, { useEffect, useState } from "react";
import './style.scss'
import ProductCard from "./components/ProductCard";
import { Link } from 'react-router-dom'
import { makeRequest } from "../../core/utils/request";
import { ProductResponse } from "../../core/types/Products";
import ProductCardLoader from "./components/Loaders/ProductCardLoader";

const Catalog = () => {

    const [productsResponse, setProductsReponse] = useState<ProductResponse>();
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        const params ={
            page:0,
            linesPerPage: 12,
            
        }

        setIsLoading(true)
        makeRequest({ url: '/products', params})
        .then(response => setProductsReponse(response.data))
        .finally(() => {
             setIsLoading(false);
        })
    } ,[]);

    return (
    <div className="catalog-container">
        <h1 className="catalog-title">
            Product catalog
        </h1>
    <div className="catalog-products">
        {isLoading ? <ProductCardLoader /> : (
            productsResponse?.content.map(product =>(
                <Link to={`/products/${product.id}`} key={product.id} className="link-product-card">
                <ProductCard product={product} />
                </Link>
            ))
        )}
    </div>

    </div>
);}

export default Catalog;