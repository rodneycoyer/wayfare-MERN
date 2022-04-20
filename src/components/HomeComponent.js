import React from "react";
import { Container, Card, CardImg, CardText, CardBody, CardGroup, CardTitle, Row, Jumbotron, Button, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";
import PromotionBanner from "./PromotionBanner";
import MissionStatement from "./MissionStatement";

function RenderCard({ item }) {
    return (
        <Card className="ml-3" color="warning">
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardImgOverlay className="mt-4">
                <CardTitle className="text-center"> {item.name} </CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Home({ location, host, experience }) {

    return (
        <React.Fragment>
            <Jumbotron fluid className="jumbotron-home">
                <Container>
                    <div className="row">
                        <div className="col-m-8">
                            <h1> wayfare </h1>
                            <h2> Every journey starts here </h2>
                            <br />
                            <Button color="primary" size="lg">
                                <i /> Book Now
                            </Button>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Container className="mb-5">
                <h2> Featured Picks </h2>
                <Row>
                    <CardGroup>
                        <RenderCard item={location[0]} />
                        <RenderCard item={location[1]} />
                        <RenderCard item={experience[0]} />
                    </CardGroup>
                </Row>
            </Container>

            <MissionStatement />

            <Container className="mb-5 mt-5">
                <h2> Find Places to Stay </h2>
                <Row>
                    <CardGroup>
                        <RenderCard item={location[2]} />
                        <RenderCard item={location[3]} />
                        <RenderCard item={location[4]} />
                    </CardGroup>
                </Row>
            </Container>

            <PromotionBanner />

            <Container className="mt-4 mb-4">
                <h2> Discover More Experiences </h2>
                <Row>
                    <CardGroup>
                        <RenderCard item={experience[1]} />
                        <RenderCard item={experience[2]} />
                        <RenderCard item={experience[0]} />
                    </CardGroup>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Home;