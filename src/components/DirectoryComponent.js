import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class Directory extends Component {
    constructor(props) {
       super(props);
       this.state = {
            selectedDestination: null,
       };
    }

    onDestinationSelect(destination) {
       this.setState({ selectedDestination: destination });
    }

    renderSelectedDestination(destination) {
        if (!destination) {
            return <div />
        }
        return (
            <Card>
                <CardImg top src={destination.image} alt={destination.name} />.
                <CardBody>{destination.name}</CardBody>
                <CardText>{destination.description}</CardText>
            </Card>
        );
    }

    render() {
        const directory = this.props.destinations.map(destination => {
            return (
                <div key={destination.id} className="col-md5-m1">
                    <Card onClick={() => this.onDestinationSelect(destination)}>
                        <CardImg width="100%" src={destination.image} />
                        <CardImgOverlay>
                            <CardTitle>{destination.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="col-md-5 m-1">
                    {this.renderSelectedDestination(this.state.selectedDestination)}

                </div>
            </div>
        );
    }
}

export default Directory;