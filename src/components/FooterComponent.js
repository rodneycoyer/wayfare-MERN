import React from "react";
import { Link } from "react-router-dom";
import Container from "reactstrap/lib/Container";

function Footer(props) {
    return (
        <footer className="site-footer"  >
            <Container>
                <div className="row">
                    <div className="col-3 col-sm-2 offset-2">
                        <h5> Links </h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home"> Home </Link></li>
                            <li><Link to="/locations"> Locations </Link></li>
                            <li><Link to="/experiences"> Vacation Packages </Link></li>
                            <li><Link to="/blog"> Blog </Link></li>
                            <li><Link to="/host"> Become a Host </Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5> Social </h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-3 text-center">
                        <h5> Contact Us </h5>
                        <a role="button" className="btn btn-link" href="tel:+5555555555"><i className="fa fa-phone" /> 1-555-555-5555</a><br />
                        <a role="button" className="btn btn-link" href="wayfare@wayfare.org"><i className="fa fa-envelope-o" /> wayfare@wayfare.org</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer