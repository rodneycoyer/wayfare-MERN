import React from "react";
import { Container, Card, CardImg, CardImgOverlay, CardTitle, Col, Row, Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

function RenderProductCard({ product }) {
    return (
        <Card>
            <Link to={`/products/${product.id}`}>
            <CardImg with="100%" src={product.image} alt={product.name} />
            <CardImgOverlay>
                <CardTitle> {product.name} </CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}

function ProductDirectory(props) {

    const directory = props.products.map(product => {
        return (
            <div key={product.id} className="col-md-5 m-1">
                <RenderProductCard product={product} />
            </div>
        );
    });


    return (
        <React.Fragment>
            <Jumbotron fluid className="jumbotron-products">
                <Row>
                    <Col>
                        <h1> Heading 1 Text </h1>
                        <h2> secondary text </h2>
                    </Col>
                </Row>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to="/home"> Home </Link> </BreadcrumbItem>
                            <BreadcrumbItem active> Products </BreadcrumbItem>
                        </Breadcrumb>
                        <h2> Gift Shop </h2>
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

export default ProductDirectory;