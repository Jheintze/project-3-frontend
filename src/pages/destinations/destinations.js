import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./destinations.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import BookingModal from "../../components/Booking/BookingModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { formattedPrice } from "../../components/Booking/BookingModal"
// Destinations.js
import BookingModal, { formattedPrice } from "../../components/Booking/BookingModal";

// Rest of the code

const API_URL = process.env.REACT_APP_API_URL;

const Destinations = (props) => {
  const [planet, setPlanet] = useState(null);
  const { planetId } = useParams();

  const getPlanet = () => {
    axios
      .get(`${API_URL}/api/planets/${planetId}`)
      .then((response) => {
        const oneplanet = response.data;
        setPlanet(oneplanet);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPlanet();
  }, [planetId]);

  return (
    <>
      {planet && (
        <Container fluid>
          <Row>
            <Col xs={12} md={6} className="pictureWrapper">
              <img src={planet.img} alt="alt" className="img-fluid" />
            </Col>
            <Col className="wrapper" xs={12} md={6}>
              <h1 className="title"> {planet.name} </h1>
              <p className="planetText">{planet.description}</p>
              <ul className="planetFacts">
                <li className="listFacts"> Type: {planet.type} </li>
                <li className="listFacts"> Weather: {planet.weather}</li>
                <li className="listFacts">
                  {" "}
                  Baseprice: {formattedPrice(planet.price)} 
                </li>
                <li className="listFacts"> Day : {planet.day}</li>
                <li className="listFacts"> Year : {planet.year}</li>
              </ul>
              <BookingModal handleShow={props.handleShow} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Destinations;
