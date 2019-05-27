import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import'./DropDownMenu.scss';

export default class DropDownMenu extends Component {
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
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        Kategorie
        </DropdownToggle>
        <DropdownMenu>
        {this.props
            .categories
            .map((item, i) => {
                return (
                    <DropdownItem
                        key={i}
                        className="nav-item"
                        data-prop="category"
                        data-order={item}
                        onClick={this.props.onChangeCategory}>
                        {item}
                    </DropdownItem>
                );
            })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}