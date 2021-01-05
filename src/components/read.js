import React from 'react';
import { Games } from './games';
import axios from 'axios';

//This is my read file where you can view the lists added to the database
export class Read extends React.Component {

    constructor() {
        super();
        //ReloadData function
        this.ReloadData = this.ReloadData.bind(this);
    }

    //Undefined property where all the games are added
    state = {
        games: []
    };

    //My componentDidMount method which will be triggered after state is set
    componentDidMount() {
        axios.get('http://localhost:4000/thegame')
            //If correct then data is sent back
            .then((response) => {
                this.setState({ games: response.data })
            })
            .catch((error) => {
                //If not then an error is sent
                console.log(error)
            });
    }

    //This my reloadDta method which essentially does the same as componentDidMount
    ReloadData() {
        axios.get('http://localhost:4000/thegame')
            .then((response) => {
                //If correct then data is sent back
                this.setState({ games: response.data })
            })
            .catch((error) => {
                //If not then an error is sent
                console.log(error)
            });
    }

    //This is just some text at the top of the web page i have rendered in
    render() {
        return (
            <div>
                <h1>This is your Wishlist</h1>
                <h4>Click Edit to change specific field</h4>
                <h4>Click Remove to remove item from wishlist</h4>
                <br></br>
                <Games games={this.state.games} ReloadData={this.ReloadData}></Games>
            </div>
        );
    }
}