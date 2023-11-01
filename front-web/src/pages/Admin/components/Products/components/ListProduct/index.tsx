import React from "react";
import './style.scss';
import { useNavigate } from "react-router-dom";

const List = () => {
      const navigate = useNavigate();

      const handleCreate = () => {
                navigate("/admin/products/create");
        }
        return (
        <div className="admin-products-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                    ADICIONAR
             </button>
        </div>

        )
};

export default List;