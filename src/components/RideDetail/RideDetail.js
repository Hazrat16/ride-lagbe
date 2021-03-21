import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useParams } from 'react-router';
import { vehicles } from '../Home/Home';

const RideDetail = () => {
    const {title} = useParams();
    console.log(title);
    const [ride,setRide] =useState([])
    useEffect(() => {
        setRide(ride);
    },[ride])
    const info = vehicles.find(v => v.title === title)
    console.log(info);


    const [form, setForm] = useState(true);
    const [distance,setDistance] = useState({
        from:'',
        to:'',
    });

    const handleDistance = (event) => {
        console.log(event.target.name, event.target.value);
        console.log(distance);
        setDistance(event.target.value);
    }
    return (
        <Container>
            <Row>
                <Col sm={4}>
            {form ?
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control onBlur={handleDistance} type="text" name='from' placeholder="From" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control onBlur={handleDistance} type="text" name='to' placeholder="To" />
                        </Form.Group>
                        
                        <Button onClick={() => setForm(false)} style={{ backgroundColor: '#FF6E40', border: 'none' }} size='lg' type="submit" block>
                            Submit
                    </Button>
                    </Form>
                    :
                    <Form>
                        <div>
                            <div>
                                <h3>{distance.from}</h3>
                            </div>
                            <Row style={{ backgroundColor: 'gray', display: 'inline' }}>
                                <Col sm={4} style={{ display: 'flex', padding: '10px' }}>
                                    <img style={{ width: '40%' }} src={info.imageURL} alt="" />
                                    <h4 style={{ paddingRight: '80px', paddingLeft: '80px',display:'flex' }}>{info.title} <FontAwesomeIcon icon={faUsers} /> 4</h4>
                                    <h5>$57</h5>
                                </Col>
                                <Col sm={4} style={{ display: 'flex', padding: '10px' }}>
                                    <img style={{ width: '40%' }} src={info.imageURL} alt="" />
                                    <h4 style={{ paddingRight: '80px', paddingLeft: '80px',display:'flex' }}>{info.title} <FontAwesomeIcon icon={faUsers} /> 4</h4>
                                    <h5>$57</h5>
                                </Col>
                                <Col sm={4} style={{ display: 'flex', padding: '10px' }}>
                                    <img style={{ width: '40%' }} src={info.imageURL} alt="" />
                                    <h4 style={{ paddingRight: '80px', paddingLeft: '80px',display:'flex' }}>{info.title} <FontAwesomeIcon icon={faUsers} /> 4</h4>
                                    <h5>$57</h5>
                                </Col>
                                <Col sm={4} style={{ display: 'flex', padding: '10px' }}>
                                    <img style={{ width: '40%' }} src={info.imageURL} alt="" />
                                    <h4 style={{ paddingRight: '80px', paddingLeft: '80px',display:'flex' }}>{info.title} <FontAwesomeIcon icon={faUsers} /> 4</h4>
                                    <h5>$57</h5>
                                </Col>
                            </Row>
                        </div>
                    </Form>}
                </Col>
                <Col sm={8}>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default RideDetail;