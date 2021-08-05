import React, { Component } from "react";
import { Container, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Label } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { NavLink } from "react-router-dom";

const required = val => val && val.length;
const maxLength = len => val => !(val) || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            password: "",
            email: "",
            remember: false,
            touched: {
                email: false,
                password: false,
            }
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return (
            <React.Fragment>
                <Navbar sticky="top" expand="md" light>
                    <Container fluid>
                        <NavbarBrand className="mr-auto" href="/home">
                            <i class="fa fa-tree" aria-hidden="true" /> {" "}
                            wayfare
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/locations">
                                        <i className="fa fa-star fa-lg" /> Destinations
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/experiences">
                                        <i className="fa fa-heart fa-lg" /> Experiences
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog">
                                        <i className="fa fa-gift fa-lg" /> Gift Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/host">
                                        <i className="fa fa-home fa-lg" /> Become a Host
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button
                                    onClick={this.toggleModal}
                                    color="primary"
                                    outline
                                >
                                    <i className="fa fa-user" /> Sign In
                                </Button>
                                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                    <ModalHeader color="blue" toggle={this.toggleModal} > Login </ModalHeader>
                                    <ModalBody>
                                        <LocalForm onSubmit={values => this.handleLogin(values)}>
                                            <div className="form-group">
                                                <Control.text
                                                    model=".email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    className="form-control"
                                                    validators={{
                                                        required,
                                                        validEmail,
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".email"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: "Required",
                                                        validEmail: "Invalid email address",
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Control.text
                                                    className="form-control"
                                                    model=".password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Password" 
                                                    validators={{
                                                            minLength: minLength(2),
                                                            maxLength: maxLength(15)
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".password"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        minLength: 'Invalid. Must be at least 2 characters',
                                                        maxLength: 'Invalid. Must be 15 characters or less'
                                                    }}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-check">
                                                        <Label check>
                                                            <Control.checkbox
                                                                model=".remember"
                                                                name="remember"
                                                                className="form-check-input"
                                                            /> Remember Me
                                                        </Label>
                                                    </div>
                                                    <br />
                                                    <Button color="primary" type="submit"> Login </Button> {' '}
                                                    <Button color="secondary" type="submit"> New User </Button>
                                                </div>
                                            </div>
                                        </LocalForm>
                                    </ModalBody>
                                </Modal>
                            </span>
                        </Collapse>
                        <Button className="cart-btn" color="danger" outline>
                            <i className="fa fa-shopping-cart" /> 0
                        </Button>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;