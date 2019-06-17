import React from 'react';
import UserOrder from './UserOrder/UserOrder';

//Import styles
import './UserOrdersList.scss';

const UserOrdersList = props => (
  <div className='d-flex flex-wrap justify-content-center'>
    <div className='p-2 col-12'>
      <ul className='list-group'>
        {props.orders.map((order, i) => {
          return (
            <li key={i} className='list-group-item'>
              <UserOrder order={order} />
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default UserOrdersList;
