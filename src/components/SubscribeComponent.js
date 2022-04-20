import React, { Component } from 'react';
import { Button, Col, Row, Label, Container } from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Subscribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            agree: false,
            touched: {
                firstName: false,
                lastName: false,
                email: false,
            }
        };
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    handleSubscribe(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return(
            <React.Fragment>
                <Container fluid className="subscription">
                    <Container className="mt-4">
                        <div className="row">
                            <div className="col-md-6">
                                <LocalForm onSubmit={values => this.handleSubscribe(values)}>
                                    <Row className="form-group">
                                        <Col>
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
                                        <Col>
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
                                        <Col>
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
                                        <Col>
                                            <div className="form-check">
                                                <Label check>
                                                    <Control.checkbox
                                                        model=".agree"
                                                        name="agree"
                                                        className="form-check-input"
                                                    /> {' '}
                                                    Agree to Terms and Conditions
                                                </Label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col>
                                            <Button type="submit" color="info" block>
                                                Subscribe
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                            <div className="col-md-6 text-center">
                                <h2> Subscribe for more! </h2>
                                <p>Sign-up and receive promotions and discounts from your favorites Destinations and Vacations!</p>
                            </div>
                        </div>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}

export default Subscribe;