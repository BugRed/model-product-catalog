import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Navbar from "./core/components/Navbar";
import ProductDetails from "./pages/Catalog/components/ProductDetails";


const _Routes = () => (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Catalog />} />
                <Route path="/products/:productId" element={<ProductDetails />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
);

export default _Routes;