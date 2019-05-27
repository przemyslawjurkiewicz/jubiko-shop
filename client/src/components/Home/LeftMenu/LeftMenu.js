import React from 'react';
import './LeftMenu.scss';

const LeftMenu = props => (
    <ul className="left-menu d-flex flex-column mt-2 ">
        <p>Kategorie:</p>
        <li
            className="nav-item"
            data-prop="category"
            data-order="All"
            onClick={props.onChangeCategory}>
            Wszystkie
        </li>

        {props
            .categories
            .map((item, i) => {
                return (
                    <li
                        key={i}
                        className="nav-item"
                        data-prop="category"
                        data-order={item}
                        onClick={props.onChangeCategory}>
                        {item}
                    </li>
                );
            })}
    </ul>
);

export default LeftMenu;
