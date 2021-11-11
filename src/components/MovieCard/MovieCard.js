import React from 'react'
import { Container, Card } from "react-bootstrap";

const  MovieCard = (
    {
        description,
        posterURL, 
        rating, 
        title
    })  =>  {
    return (
        <div >
            <Container>
                <Card className="mb-3 mt-3" style={{ color: "#000" }}>
                    <h3>{title}</h3>
                    <Card.Body>
                    <Card.Img className="br-10 h6 w6 dib" src={posterURL} alt='movie' />
                        <Card.Text>{rating}</Card.Text>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>		
            </Container>
        </div>
    )
}


export default MovieCard

