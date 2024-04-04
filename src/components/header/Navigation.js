import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import LOGO from "./LOGO";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  navToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar fixed="top" light color="white" expand="sm">
          <div className="container main-container">
            <div className="left">
            <NavbarToggler onClick={this.navToggle} />
            <NavbarBrand className="logo-container" href="/">
              <LOGO />
            </NavbarBrand>
            </div>
            <Collapse className="items" isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
                <div className="middle">
                <NavItem>
                  <Link to="/" className="nav-link" onClick={this.navToggle}>
                    HOME
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/menu"
                    className="nav-link"
                    onClick={this.navToggle}
                  >
                    SHOP
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/about"
                    className="nav-link"
                    onClick={this.navToggle}
                  >
                    PRODUCTS
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/contact"
                    className="nav-link"
                    onClick={this.navToggle}
                  >
                    CHECKOUT
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/portfolio"
                    className="nav-link"
                    onClick={this.navToggle}
                  >
                    CONTACT
                  </Link>
                </NavItem>
                </div>
              </Nav>
            </Collapse>
            <div className="right">
                  <div>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0086 13.2075H14.06L13.7238 12.8834C14.9005 11.5146 15.6089 9.73756 15.6089 7.80446C15.6089 3.494 12.1149 0 7.80446 0C3.494 0 0 3.494 0 7.80446C0 12.1149 3.494 15.6089 7.80446 15.6089C9.73756 15.6089 11.5146 14.9005 12.8834 13.7238L13.2075 14.06V15.0086L19.211 21L21 19.211L15.0086 13.2075ZM7.80446 13.2075C4.81475 13.2075 2.40137 10.7942 2.40137 7.80446C2.40137 4.81475 4.81475 2.40137 7.80446 2.40137C10.7942 2.40137 13.2075 4.81475 13.2075 7.80446C13.2075 10.7942 10.7942 13.2075 7.80446 13.2075Z"
                        fill="#2B303A"
                        fill-opacity="0.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.3 16.8C5.145 16.8 4.2105 17.745 4.2105 18.9C4.2105 20.055 5.145 21 6.3 21C7.455 21 8.4 20.055 8.4 18.9C8.4 17.745 7.455 16.8 6.3 16.8ZM0 0V2.1H2.1L5.88 10.0695L4.4625 12.642C4.2945 12.936 4.2 13.2825 4.2 13.65C4.2 14.805 5.145 15.75 6.3 15.75H18.9V13.65H6.741C6.594 13.65 6.4785 13.5345 6.4785 13.3875L6.51 13.2615L7.455 11.55H15.2775C16.065 11.55 16.758 11.1195 17.115 10.4685L20.874 3.654C20.958 3.507 21 3.3285 21 3.15C21 2.5725 20.5275 2.1 19.95 2.1H4.4205L3.4335 0H0ZM16.8 16.8C15.645 16.8 14.7105 17.745 14.7105 18.9C14.7105 20.055 15.645 21 16.8 21C17.955 21 18.9 20.055 18.9 18.9C18.9 17.745 17.955 16.8 16.8 16.8Z"
                        fill="#2B303A"
                        fill-opacity="0.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.25 5.25C14.25 4.37976 13.8549 3.54516 13.1517 2.92981C12.4484 2.31445 11.4946 1.96875 10.5 1.96875C9.50544 1.96875 8.55161 2.31445 7.84835 2.92981C7.14509 3.54516 6.75 4.37976 6.75 5.25C6.75 6.12024 7.14509 6.95484 7.84835 7.57019C8.55161 8.18555 9.50544 8.53125 10.5 8.53125C11.4946 8.53125 12.4484 8.18555 13.1517 7.57019C13.8549 6.95484 14.25 6.12024 14.25 5.25ZM4.5 5.25C4.5 3.85761 5.13214 2.52226 6.25736 1.53769C7.38258 0.553123 8.9087 0 10.5 0C12.0913 0 13.6174 0.553123 14.7426 1.53769C15.8679 2.52226 16.5 3.85761 16.5 5.25C16.5 6.64239 15.8679 7.97775 14.7426 8.96231C13.6174 9.94688 12.0913 10.5 10.5 10.5C8.9087 10.5 7.38258 9.94688 6.25736 8.96231C5.13214 7.97775 4.5 6.64239 4.5 5.25ZM2.31094 19.0312H18.6891C18.2719 16.435 15.7219 14.4375 12.6422 14.4375H8.35781C5.27813 14.4375 2.72812 16.435 2.31094 19.0312ZM0 19.7818C0 15.7418 3.74063 12.4688 8.35781 12.4688H12.6422C17.2594 12.4688 21 15.7418 21 19.7818C21 20.4545 20.3766 21 19.6078 21H1.39219C0.623438 21 0 20.4545 0 19.7818Z"
                        fill="#2B303A"
                        fill-opacity="0.75"
                      />
                    </svg>
                  </div>
                </div>
          </div>
        </Navbar>

        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Navigation;
