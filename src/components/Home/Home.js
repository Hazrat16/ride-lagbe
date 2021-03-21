import React from 'react';
import { Row } from 'react-bootstrap';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';

export const vehicles = [
    {
        id: 1,
        title: 'Bike',
        imageURL:'https://clipartart.com/images/clipart-bullet-bike.jpg',
    },
    {
        id: 2,
        title: 'Car',
        imageURL:'https://ak.picdn.net/shutterstock/videos/16459990/thumb/1.jpg',
    },
    {
        id: 3,
        title: 'Bus',
        imageURL:'https://img.favpng.com/18/9/24/tour-bus-service-coach-clip-art-png-favpng-QXvxuud6v8D9eVGxhSwa0ZgNu.jpg',
    },
    {
        id: 4,
        title: 'Train',
        imageURL:'https://media.gettyimages.com/videos/hand-drawn-animation-train-running-on-the-railway-video-id1208702951?s=640x640',
    }
]

const Home = () => {
    
    
    return (
        <div className='home-style'>
            <Row>
            {
                vehicles.map(vehicle => <Vehicle key={vehicle.title} vehicle={vehicle} ></Vehicle>)
            }
            </Row>
        </div>
    );
};

export default Home;