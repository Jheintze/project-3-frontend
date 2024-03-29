import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const API_URL = process.env.REACT_APP_API_URL;

function FlightCard({ flight, getUserFlights }) {
  const deleteFlight = (fligthId) => {
    axios
      .delete(`${API_URL}/api/delete/${fligthId}`)
      .then((response) => {
        getUserFlights();
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  var dat = new Date(flight.departure).toLocaleDateString();
  var wat = new Date(flight.returning).toLocaleDateString();

  return (
    <Card
      style={{
        width: "18rem",
        marginBottom: "50px",
        color: "white",
        backgroundColor: "black",
        borderColor: "navy",
      }}
    >
      <Card.Img
        style={{ marginTop: "5px" }}
        variant="top"
        src={flight.planet.img}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "large" }}>
          {" "}
          Flight to {flight.planet.name} for {flight.price} €
        </Card.Title>
        <Card.Text>
          {dat} - {wat}
        </Card.Text>
        {flight.children !== undefined &&
          flight.children !== null &&
          flight.children > 0 && (
            <Card.Text>
              {flight.adults === 1 ? "1 Adult" : `${flight.adults} Adults`}{" "}
              {flight.children === 1
                ? "1 Child"
                : `${flight.children} Children`}{" "}
              {flight.TravelClass || "Economy class"}
            </Card.Text>
          )}
        {(flight.children === undefined ||
          flight.children === null ||
          flight.children === 0) && (
          <Card.Text>
            {flight.adults === 1 ? "1 Adult" : `${flight.adults} Adults`}{" "}
            {flight.TravelClass || "Economy class"}
          </Card.Text>
        )}
        <Button
          style={{ backgroundColor: "black" }}
          onClick={() => deleteFlight(flight._id)}
          variant="primary"
        >
          Cancel Flight
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FlightCard;
