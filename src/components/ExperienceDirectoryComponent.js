import React from 'react';
import { Container, Card, CardImg, CardImgOverlay, CardTitle, Col, Row, Breadcrumb, BreadcrumbItem, Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom";

function RenderExperienceCard({ experience }) {
    return (
        <Card>
            <Link to={`/experiences/${experience.id}`}>
            <CardImg width="100%" src={experience.image} alt={experience.name} />
            <CardImgOverlay>
                <CardTitle>{experience.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}

function ExperienceDirectory(props) {

    const experienceDirectory = props.experiences.map(experience => {
        return (
            <div key={experience.id} className="col-md-5 m-1">
                <RenderExperienceCard experience={experience} />
            </div>
        );
    });

    return (
        <React.Fragment>
            <Jumbotron className="jumbotron-experiences" fluid>
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
                        <BreadcrumbItem active> Experiences </BreadcrumbItem>
                    </Breadcrumb>
                    <h2> Popular Experiences </h2>
                    <hr />
                </Col>
            </Row>
            <Row>
                {experienceDirectory}
            </Row>
        </Container>
        </React.Fragment>
    );
}

export default ExperienceDirectory;