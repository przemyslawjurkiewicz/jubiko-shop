import React from 'react';
import './TopMenu.scss';
import SortMenu from './SortMenu/SortMenu';

const TopMenu = props => (
  <div className='top-menu d-flex p-3 justify-content-start align-items-center'>
    <p> Sortuj po: </p>
    <SortMenu onChangeSort={event => props.onChangeSort(event)} />
  </div>
);

export default TopMenu;
