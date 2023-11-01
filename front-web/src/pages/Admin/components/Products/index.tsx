import React from "react";
import NavBar from "../NavBar";
import './style.scss';
import List from "./components/ListProduct";

const Products = () =>{

    return(

        <>  
            <div className="nav-container">
                    <NavBar />
            </div>
            <div className="products-container">
                <List />
            </div>
        </>
)};

export default Products;