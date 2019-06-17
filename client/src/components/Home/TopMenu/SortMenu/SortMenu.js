import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export default class SortnMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} size='sm' toggle={this.toggle}>
        <DropdownToggle caret>Wybierz</DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            className='nav-item'
            data-prop='name'
            data-order='asc'
            onClick={this.props.onChangeSort}
          >
            Nazwa: A-Z
          </DropdownItem>
          <DropdownItem
            className='nav-item'
            data-prop='name'
            data-order='desc'
            onClick={this.props.onChangeSort}
          >
            Nazwa: Z-A
          </DropdownItem>
          <DropdownItem
            className='nav-item'
            data-prop='price'
            data-order='asc'
            onClick={this.props.onChangeSort}
          >
            Cena: rosnąco
          </DropdownItem>
          <DropdownItem
            className='nav-item'
            data-prop='price'
            data-order='desc'
            onClick={this.props.onChangeSort}
          >
            Cena: malejąco
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
