import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

function RenderLocationInfo({ location }) {
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg
                    top src={location.image}
                    alt={location.name}
                />
                <CardBody>
                    <CardText>{location.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderReviews({ reviews }) {
    if (reviews) {
        return (
            <div className="col-md-5 m-1">
                <h4> Reviews </h4>
                {
                    reviews.map(review => {
                        return (
                            <div key={review.id}>
                                <p>
                                    {
                                        new Intl.DateTimeFormat(
                                            'en-US',
                                            {
                                                year: 'numeric',
                                                month: 'short',
                                                day: '2-digit'
                                            })
                                        .format(new Date(Date.parse(review.date)))
                                    }
                                    <br/>
                                    {review.text}
                                    <br/>
                                    -{review.author}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    return <div />
}

function LocationInfo(props) {
    if (props.location) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/locations"> Destinations </Link></BreadcrumbItem>
                            <BreadcrumbItem active> {props.location.name} </BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.location.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderLocationInfo location={props.location} />
                    <RenderReviews reviews={props.reviews} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default LocationInfo;