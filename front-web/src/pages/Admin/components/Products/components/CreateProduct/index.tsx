import React from "react";
import './style.scss';
import NavBar from "pages/Admin/components/NavBar";
import List from "../ListProduct";
import BaseForm from "pages/Admin/components/BaseForm";


const CreateProduct = () => {


    return(
        <>
            <div className="nav-container">
                    <NavBar />
            </div> 
            <div className="base-form">
            <BaseForm title="CADASTRAR">
                    <div className="row">
                        <div className="col-6">
                        <input type="text" className="inpt form-control" />
                        </div>
                    </div>
                </BaseForm>
            </div>
        </>
)};

export default CreateProduct;