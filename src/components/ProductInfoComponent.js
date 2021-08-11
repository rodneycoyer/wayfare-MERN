import React from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

function RenderProductInfo({ product }) {
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg
                    top src={product.image}
                    alt={product.name}
                />
                <CardBody>
                    <CardText>{product.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderReviews({ reviews, addReview, productId }) {
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
                <Button >Leave Review</Button>
            </div>
        );
    }
    return <div />
}

function ProductInfo(props) {
    if (props.product) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/products"> Products </Link></BreadcrumbItem>
                            <BreadcrumbItem active> {props.product.name} </BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.product.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderProductInfo product={props.product} />
                    <RenderReviews
                        reviews={props.reviews}
                        addReview={props.addReview}
                        productId={props.product.id}
                    />
                </div>
            </div>
        );
    }
    return <div />;
}

export default ProductInfo;