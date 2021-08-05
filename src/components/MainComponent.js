import React, { Component } from "react";
import LocationDirectory from "./LocationDirectoryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import LocationInfo from "./LocationInfoComponent";
import ExperienceDirectory from "./ExperienceDirectoryComponent";
import ExperienceInfo from "./ExperienceInfoComponent";
import Subscribe from "./SubscribeComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        locations: state.locations,
        hosts: state.hosts,
        reviews: state.reviews,
        experiences: state.experiences,
    }
}

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
                />
            );
        }

        const ExperienceWithId = ({ match }) => {
            return (
                <ExperienceInfo
                    experience={this.props.experiences.filter(experience => experience.id === +match.params.experienceId)[0]}
                    reviews={this.props.reviews.filter(review => review.experienceId === +match.params.experienceId)}
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
                        <Redirect to="/home" />
                    </Switch>
                <Subscribe />
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));