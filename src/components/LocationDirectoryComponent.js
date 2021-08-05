import React from 'react';
import { Container, Card, CardImg, CardImgOverlay, CardTitle, Col, Row, Breadcrumb, BreadcrumbItem, Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom";

function RenderLocationCard({ location }) {
    return (
        <Card>
            <Link to={`/locations/${location.id}`}>
            <CardImg width="100%" src={location.image} alt={location.name} />
            <CardImgOverlay>
                <CardTitle>{location.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}

function LocationDirectory(props) {

    const directory = props.locations.map(location => {
        return (
            <div key={location.id} className="col-md-5 m-1">
                <RenderLocationCard location={location} />
            </div>
        );
    });

    return (
        <React.Fragment>
            <Jumbotron fluid className="jumbotron-locations">
                <Container>
                    <div className="row">
                        <div className="col">
                            <h1> Heading 1 Text </h1>
                            <h2> h2 secondary text </h2>
                            <br />
                            <Button color="primary" size="lg">
                                <i /> Book Now
                            </Button>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to="/home"> Home </Link> </BreadcrumbItem>
                            <BreadcrumbItem active> Destinations </BreadcrumbItem>
                        </Breadcrumb>
                        <h2> Popular Destinations </h2>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    {directory}
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default LocationDirectory;