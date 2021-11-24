import React from "react";
import {
  CardHeader,
  CardGroup,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
  CardFooter,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { moviesList } from "../assets/mookData";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Movie = () => {
  const { id } = useParams();
  const object = moviesList.find((movie) => movie.id === id);
  return (
    <div>
      <CardGroup className="m-3">
        <Card>
          <CardHeader>
            <Button variant="contained" disableElevation>
                <Link to="/">Home</Link>
            </Button>
            
          </CardHeader>
          <CardImg
            variant="top"
            style={{ width: "100%", height: "500px", margin: "auto" }}
            src={object.posterUrl}
          />
          <CardBody>
            <CardTitle>{object.title}</CardTitle>
            <CardText>{object.description}</CardText>
          </CardBody>
          <CardFooter>
            <Button
              variant="contained"
              startIcon={<YouTubeIcon />}
              color="secondary"
              target="__blank"
              href={object.trailerlink}
            >
              Watch the Trailer
            </Button>
          </CardFooter>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Movie;
