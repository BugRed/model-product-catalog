import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Navbar from "./core/components/Navbar";

const _Routes = () => (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
);

export default _Routes;