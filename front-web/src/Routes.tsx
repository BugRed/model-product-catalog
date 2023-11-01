import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Navbar from "./core/components/Navbar";
import ProductDetails from "./pages/Catalog/components/ProductDetails";
import Products from "pages/Admin/components/Products";
import Categories from "pages/Admin/components/Categories";
import Users from "pages/Admin/components/Users";
import CreateProduct from "pages/Admin/components/Products/components/CreateProduct";
import EditProduct from "pages/Admin/components/Products/components/EditProduct";


const _Routes = () => (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Catalog />} />
                <Route path="/products/:productId" element={<ProductDetails />} />
                <Route path="/admin" element={<Admin />} />
                    <Route path="/admin/products" element={<Products />}/>
                        <Route path="/admin/products/:productId" element={<EditProduct />}/>
                        <Route path="/admin/products/create" element={<CreateProduct />}/>
                    <Route path="/admin/categories" element={<Categories />}/>
                    <Route path="/admin/users" element={<Users />}/>
            </Routes>
        </BrowserRouter>
);

export default _Routes;