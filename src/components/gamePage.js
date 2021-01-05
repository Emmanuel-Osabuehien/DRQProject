import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//This is my GamePage where I complete my delete function and display my card to the read.js file
export class GamePage extends React.Component {

    constructor() {
        super();

        this.DeleteGame = this.DeleteGame.bind(this);
    }

    //This is my delete function
    DeleteGame(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.game._id);
        //deletes the id from my url
        axios.delete("http://localhost:4000/thegame/" + this.props.game._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    //Here is where I edit the display of my read file
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.game.title}</Card.Header>
                    <Card.Header>{this.props.game.console}</Card.Header>
                    <Card.Header>{this.props.game.year}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.game.poster} width="200" height="200"></img>
                        </blockquote>
                    </Card.Body>
                    <Card.Footer>{this.props.game.price}</Card.Footer>
                    <Link to={"/edit/" + this.props.game._id} className="btn btn-primary" style={{ background: 'black' }}>Click to Edit Info</Link>
                    <Button onClick={this.DeleteGame} style={{ background: 'black' }}>Click to Delete from Wishlist</Button>
                </Card>


            </div>
        );
    }
}