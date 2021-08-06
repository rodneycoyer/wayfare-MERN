import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Col, Row, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors} from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class HostRegistration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phoneNum: "",
            email: "",
            agree: false,
            hostType: "destination",
            description: "",
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
                description: false,
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        //this.props.resetFeedbackForm();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to="/home"> Home </Link> </BreadcrumbItem>
                            <BreadcrumbItem active> Become a Host </BreadcrumbItem>
                        </Breadcrumb>
                        <h2> Become a Host </h2>
                        <hr />
                    </div>
                </div>
                    <div className="row row-content">
                    <div className="col-12">
                        <h2> Sign up and Host </h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default HostRegistration;

//src\components\HostRegistrationComponent.js

/*  <Form  onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstName"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be at least 2 characters",
                                            maxLength: "Must be 15 characters or less",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastName"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be at least 2 characters",
                                            maxLength: "Must be 15 characters or less",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".phoneNum"
                                        id="phoneNum"
                                        name="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be at least 10 numbers",
                                            maxLength: "Must be 15 numbers or less",
                                            isNumber: "Must be a number",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
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
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 4, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong> Host Type: </strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <Control.select
                                        model=".hostType"
                                        name="hostType"
                                        className="form-control"
                                    >
                                        <option> Host a Destination </option>
                                        <option> Host a Guided Tour Experience </option>
                                        <option> Host an Online Workshop or Experience </option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="description" md={2}> Description </Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".description"
                                        id="description"
                                        name="description"
                                        rows="12"
                                        placeholder="Write a description of the experience of location you are hosting."
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Register
                                    </Button>
                                </Col>
                            </Row>
                        </Form> */