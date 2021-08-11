import React, { Component } from "react";
import { Button, Container, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Modal, ModalHeader, ModalBody, ModalFooter, Label } from "reactstrap";
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
                <Navbar fixed="top" expand="md" light>
                    <Container fluid>
                        <NavbarBrand className="mr-auto" href="/home">
                            <i class="fa fa-tree text-success" /> {" "}
                            wayfare
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/locations">
                                        <i className="fa fa-star fa-lg text-warning" /> Places to Stay
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/experiences">
                                        <i className="fa fa-heart fa-lg text-danger" /> Experiences
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/products">
                                        <i className="fa fa-gift fa-lg text-info" /> Gift Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/host">
                                        <i className="fa fa-home fa-lg text-dark" /> Become a Host
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">

                                <Button
                                    onClick={this.toggleModal}
                                    color="primary"
                                    outline
                                >
                                    <i className="fa fa-bars" />
                                    <i className="fa fa-user fa-lg" />
                                </Button>

                                {" "}
                                <Button  color="danger" outline>
                                    <i className="fa fa-shopping-cart" /> 0
                                </Button>
                            </span>
                        </Collapse>
                    </Container>
                </Navbar>
                <Modal centered isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader color="blue" toggle={this.toggleModal} > Log in or Sign Up </ModalHeader>
                    <ModalBody>
                        <br />
                        <h5> Welcome to wayfare </h5>
                        <br />
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
                                    <Button block color="primary" type="submit" size="lg"> Continue </Button>
                                </div>
                            </div>
                        </LocalForm>
                    </ModalBody>
                    <ModalFooter>
                        <Button block outline color="secondary" type="submit"> <i class="fa fa-facebook-official fa-2x text-primary pull-left"></i> Continue with Facebook </Button>
                        <Button block outline color="secondary" type="submit"> <i class="fa fa-google fa-2x text-warning pull-left"></i> Continue with Google </Button>
                        <Button block outline color="secondary" type="submit"> <i class="fa fa-apple fa-2x pull-left"></i> Continue with Apple </Button>
                        <Button block outline color="secondary" type="submit"> <i class="fa fa-envelope-o fa-2x text-info pull-left"></i> Continue with email </Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;