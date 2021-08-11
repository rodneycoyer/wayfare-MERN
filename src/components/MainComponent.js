import React, { Component } from "react";
import LocationDirectory from "./LocationDirectoryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import LocationInfo from "./LocationInfoComponent";
import ExperienceDirectory from "./ExperienceDirectoryComponent";
import ExperienceInfo from "./ExperienceInfoComponent";
import HostRegistration from "./HostRegistrationComponent";
import ProductDirectory from "./ProductDirectoryComponent"
import ProductInfo from "./ProductInfoComponent";
import Subscribe from "./SubscribeComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addReview } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        locations: state.locations,
        experiences: state.experiences,
        products: state.products,
        hosts: state.hosts,
        reviews: state.reviews,
    }
}

const mapDispatchToProps = {
    addReview: (locationId, experienceId, productId, author, text) => (addReview(locationId, experienceId, productId, author, text))
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home
                    location={this.props.locations.filter(location => location.featured)[0]}
                    host={this.props.hosts.filter(host => host.featured)[0]}
                    experience={this.props.experiences.filter(experience => experience.featured)[0]}
                />
            );
        }

        const LocationWithId = ({ match }) => {
            return (
                <LocationInfo
                    location={this.props.locations.filter(location => location.id === +match.params.locationId)[0]}
                    reviews={this.props.reviews.filter(review => review.locationId === +match.params.locationId)}
                    addReview={this.props.addReview}
                />
            );
        }

        const ExperienceWithId = ({ match }) => {
            return (
                <ExperienceInfo
                    experience={this.props.experiences.filter(experience => experience.id === +match.params.experienceId)[0]}
                    reviews={this.props.reviews.filter(review => review.experienceId === +match.params.experienceId)}
                    addReview={this.props.addReview}
                />
            );
        }

        const ProductWithId = ({ match }) => {
            return (
                <ProductInfo
                    product={this.props.products.filter(product => product.id === +match.params.productId)[0]}
                    reviews={this.props.reviews.filter(review => review.productId === +match.params.productId)}
                    addReview={this.props.addReview}
                />
            );
        }

        return (
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/locations" render={() => <LocationDirectory locations={this.props.locations} />} />
                        <Route exact path="/locations/:locationId" component={LocationWithId} />
                        <Route exact path="/experiences" render={() => <ExperienceDirectory experiences={this.props.experiences} /> } />
                        <Route exact path="/experiences/:experienceId" component={ExperienceWithId} />
                        <Route exact path="/products" render={() => <ProductDirectory products ={this.props.products} /> } />
                        <Route exact path="/products/:productId" component={ProductWithId} />
                        <Route exact path="/host" component={() => <HostRegistration />} />
                        <Redirect to="/home" />
                    </Switch>
                <Subscribe />
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
