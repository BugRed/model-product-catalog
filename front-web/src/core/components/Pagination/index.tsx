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
    const previousClass = totalPages > 0 && activePage > 0 ? "page-active" : "page-inactive";
    const nextClass = (activePage + 1) < totalPages ? "page-active" : "page-inactive";

    return(
        <div className="pagination-container">
            <div className={`arrow-icon ${previousClass}`}>
            <ArrowIcon className={`pagination-previous ${previousClass}`}
                onClick={() => onChange(activePage -1)} />
            </div>
            {items.map(item=> (
                <div className={`pagination-item ${item === activePage ? 'active' : ''}`}
                key={item}
                onClick={() => onChange(item)}>
                    {item + 1}
                </div>
                ) )}
            
            <div className={`arrow-icon ${nextClass}`}>
            <ArrowIcon className={`pagination-next ${nextClass} arrow-icon` }
            onClick={() => onChange(activePage + 1)}/>
            </div>

        </div>
    );
};

export default Pagination;