import React from "react";
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './style.scss'
import { generateList } from "core/utils/list";

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}


const Pagination = ({ totalPages, activePage, onChange }: Props ) => {
    const items = generateList(totalPages)

    return(
        <div className="pagination-container">
            <div className="arrow-icon">
            <ArrowIcon className="pagination-previous" />
            </div>
            {items.map(item=> (
                <div className={`pagination-item ${item === activePage ? 'active' : ''}`}
                key={item}
                onClick={() => onChange(item)}>
                    {item + 1}
                </div>
                ) )}
            
            <div className="arrow-icon">
            <ArrowIcon className="pagination-next" />
            </div>

        </div>
    );
};

export default Pagination;