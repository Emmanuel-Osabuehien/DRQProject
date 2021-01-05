import React from 'react';
import axios from 'axios';

//This is my create class where I add a database to my read.js file
export class Create extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeConsole = this.onChangeConsole.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);

        //This is my 5 properties that will be added read.js file
        this.state = {
            Title: '',
            Console: '',
            Year: '',
            Poster: '',
            Price: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeConsole(e) {
        this.setState({
            Console: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            Price: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        //Here is my alert that should pop up after a game has been added
        alert("Game: " + this.state.Title + " "
            + this.state.Console + " "
            + this.state.Year + " " +
            this.state.Poster + " " +
            this.state.Price);
        //Here is my addGame method that should add a new game to my read.js file after you lick the button
        const addGame = {
            title: this.state.Title,
            console: this.state.Console,
            year: this.state.Year,
            poster: this.state.Poster,
            price: this.state.Price
        }
        axios.post('http://localhost:4000/thegame', addGame)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //Here is where i render in my text boxes where you can add the data into each box
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Game Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Game Console: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Console}
                            onChange={this.onChangeConsole}></input>
                    </div>
                    <div className="form-group">
                        <label>Game Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Game Cover: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Game Price: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Price}
                            onChange={this.onChangePrice}></input>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Add Game to the Wishlist'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}