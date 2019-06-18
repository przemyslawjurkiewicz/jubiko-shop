import React from 'react';
import {UncontrolledCollapse, Button} from 'reactstrap';

// Import style
import './Faq.scss';

const Faq = () => (
  <div className='faq d-flex flex-nowrap flex-column align-items-center justify-content-center'>
    <Button
      className='question m-3 col-10'
      id='toggler'
      style={{marginBottom: '1rem'}}
    >
      Po co ta strona została zrobiona?
    </Button>
    <UncontrolledCollapse toggler='#toggler'>
      <p className='p-2'>
        Strona została stworzona po to aby pokazać moje możliwości.To tylko demo
        nie można na niej nic kupić.
      </p>
    </UncontrolledCollapse>
    <Button
      className='question m-3 col-10'
      id='toggler2'
      style={{marginBottom: '1rem'}}
    >
      Jak zbudowana jest ta strona ?
    </Button>
    <UncontrolledCollapse toggler='#toggler2'>
      <p className='p-2'>
        Aplikacja sklepu internetowego korzysta z Mongo, Express, React, Node.
        <br />
        Kod na stronie:
        <a href='https://github.com/przemyslawjurkiewicz/jubiko-shop'>
          https://github.com/przemyslawjurkiewicz/jubiko-shop
        </a>
      </p>
    </UncontrolledCollapse>
    <Button
      className='question m-3 col-10'
      id='toggler3'
      style={{marginBottom: '1rem'}}
    >
      Gdzie mogę kupić prdukty z tej strony?
    </Button>
    <UncontrolledCollapse toggler='#toggler3'>
      <p className='p-2'>
        <a href='https://www.trendymania.pl/jubiko'>
          Zapraszam na stronę https://www.trendymania.pl/jubiko
        </a>
      </p>
    </UncontrolledCollapse>
  </div>
);

export default Faq;
