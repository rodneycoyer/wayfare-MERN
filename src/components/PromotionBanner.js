import React from "react";
import { Container, Row, Col, Button } from "reactstrap";


function PromotionBanner (props) {
    return(
        <Container fluid className="promotion">
            <Container>
                <Container className="promotion-banner mt-4 mb-4">
                    <Row>
                        <Col className="promotion-div-background" md={8}>
                            <h2> Try Hosting </h2>
                            <p> Earn extra and unlock new opportunities by hosting experiences and destinations. </p>
                            <Button color="info"> Learn More </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    );
}

export default PromotionBanner;