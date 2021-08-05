import React from "react";
import { Container, Card, CardImg, CardText, CardBody, CardTitle, Row, Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";
import PromotionBanner from "./PromotionBanner";
import MissionStatement from "./MissionStatement";

function RenderCard({ item }) {
    return (
        <Card>
            <Link>
                <CardImg
                    src={item.image}
                    alt={item.name}
                />
            </Link>
            <CardBody>
                <CardTitle> {item.name} </CardTitle>
                <CardText> {item.description} </CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
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

            <Container>
                <h2> Handpicked Features </h2>
                <Row>
                    <div className="col-md m-1">
                        <RenderCard item={props.location} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.host} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.experience} />
                    </div>
                </Row>
            </Container>

            <MissionStatement />

            <Container>
                <h2> Destinations </h2>
                <Row>
                    <div className="col-md m-1">
                        <RenderCard item={props.location} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.location} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.location} />
                    </div>
                </Row>
            </Container>

            <PromotionBanner />

            <Container>
                <h2> Discover More </h2>
                <Row>
                    <div className="col-md m-1">
                        <RenderCard item={props.experience} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.experience} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.experience} />
                    </div>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Home;