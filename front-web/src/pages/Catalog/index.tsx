import React, { useEffect } from "react";
import './style.scss'
import ProductCard from "./components/ProductCard";
import { Link } from 'react-router-dom'

const Catalog = () => {

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(response => console.log(response));
    } ,[]);

    return (
    <div className="catalog-container">
        <h1 className="catalog-title">
            Product catalog
        </h1>
    <div className="catalog-products">
        <Link to="/products/1" className="link-product-card"><ProductCard /></Link>
        <Link to="/products/2" className="link-product-card"><ProductCard /></Link>
        <Link to="/products/3" className="link-product-card"><ProductCard /></Link>
        <Link to="/products/4" className="link-product-card"><ProductCard /></Link>
        <Link to="/products/5" className="link-product-card"><ProductCard /></Link>
        <Link to="/products/6" className="link-product-card"><ProductCard /></Link>
        <Link to="/products/7" className="link-product-card"><ProductCard /></Link>
        <Link to="/products/8" className="link-product-card"><ProductCard /></Link>
        <Link to="/products/9" className="link-product-card"><ProductCard /></Link>
        
        
    </div>

    </div>
);}

export default Catalog;