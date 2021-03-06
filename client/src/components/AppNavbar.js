import React, { Component } from 'react';

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

  class AppNavbar extends Component {
      state = {
        isOpen: false
      }
      toggle = () => {
          this.setState({
            isOpen: !this.state.isOpen
          });
        };
        render(){
          return(
            <div>
              <Navbar color="dark" expand="sm" className="mb-5">
                <Container>
                  <NavbarBrand href="/">ShoppingList</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink href="https://github.com/JordanMichele">Github</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Container>
              </Navbar>
             </div>
          );
        }
      }

  export default AppNavbar;
