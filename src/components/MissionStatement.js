import React from "react";
import { Container, Row, Col } from "reactstrap";


function MissionStatement (props) {
    return(
        <Container fluid className="mission-statement">
            <Container>
                <Row>
                    <Col>
                        <img
                            src="/assets/images/destinations/card-images/zion-national-park-entrance-500x300.jpg"
                            alt="image of zion-national-park-entrance"
                        />
                    </Col>
                    <Col>
                        <h2>Mission Statement</h2>
                        <p>Generic statement about business model and objectives.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default MissionStatement;