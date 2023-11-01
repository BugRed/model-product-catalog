import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string;
    children: React.ReactNode;
}


const BaseForm = ({ title, children }:Props) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    }
    
    return(
        <div className="admin-base-form card-base">
            <h1 className='base-form-title'>
                {title}
            </h1>
            <div className="children-base-form">
                 {children}
            </div>
                
            <div className="base-form-actions">
                <button className="btn btn-outline-danger border-radius-20 mr-3"
                onClick={handleCancel}>
                    Cancelar
                </button>
            </div>
            <div className="base-form-actions">
                <button className='btn btn-primary border-radius-20'>
                    Cadastrar
                </button>
            </div>
        </div>
    
)};

export default BaseForm; 