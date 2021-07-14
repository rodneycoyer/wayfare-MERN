import React, { Component } from "react";

class Directory extends Component {
    constructor(props) {
       super(props);
       this.state = {
           destinations: [
                {
                    id: 0,
                    name: 'Reflection Lake Campground',
                    image: 'assets/images/react-lake.jpg',
                    elevation: 1233,
                    description: "Nestled in the foothills of the Cascade Mountains, this campground on the shores of the pristine Reflection Lake is a favorite for fly fishers angling for Cutthroat Trout."
                },
                {
                  id: 1,
                  name: 'Icicle Creek Campground',
                  image: 'assets/images/chrome-river.jpg',
                  elevation: 877,
                  description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by Icicle Creek. Then enjoy a day in town for iconic favorites."
                },
                {
                    id: 2,
                    name: 'Nachess Pass Campground',
                    image: 'assets/images/breadcrumb-trail.jpg',
                    elevation: 2901,
                    description: "Let us be your guide to this off-the-beaten-path, hike-in-only campground."
                },
                {
                    id: 3,
                    name: 'Olympic National Park Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush rain forest in the Olypic Peninsula."
                }
           ],
       };
    }

    render() {
        const directory = this.state.destinations.map(destination => {
            return (
                <div key={destination.id} className="col">
                    <img src={destination.image} />
                    <h2>{destination.name}</h2>
                    <p>{destination.description}</p>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;