import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Vehicle = (props) => {
    const history = useHistory()
    const {id, title, imageURL} = props.vehicle;
    const rideDetailHandle = (title) => {
        history.push(`/ride/${title}`);
    }
    return (
        <Col md={3} sm={12} onClick={() => rideDetailHandle(title)}>
            <Card className="mx-5 mt-5 ">
                <Card.Img className="rounded" variant="top" src={imageURL} />
                <Card.Body className="text-dark">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>id: {id}</Card.Text>
                    {/* <Button onClick={() => props.rideDetailHandle(id)} variant="contained" color="primary">Explore</Button> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Vehicle;