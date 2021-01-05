import React from 'react';
import axios from 'axios';

//This is my edit class where I edit the properties inside a database to my read.js file
export class Edit extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeConsole = this.onChangeConsole.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);

        //This is my 5 properties that will be added read.js file after the edit is complete
        this.state = {
            Title: '',
            Console: '',
            Year: '',
            Poster: '',
            Price: ''
        }
    }

    //My componentDidMount method which will be triggered after state is set
    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/thegame/' + this.props.match.params.id)
            .then(response => {
                //If correct the edit is fixed
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Console: response.data.console,
                    Year: response.data.year,
                    Poster: response.data.poster,
                    Price: response.data.price
                })
            })
            .catch((error) => {
                //If not an error message is sent back and preoperties stay the same
                console.log(error);
            });
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
        //After properties have beeen edited then an alert pops up
        alert("Game: " + this.state.Title + " " +
            this.state.Console + " "
            + this.state.Year + " " +
            this.state.Poster + " " + this.state.Price);

        //addGame function
        const addGame = {
            title: this.state.Title,
            console: this.state.Console,
            year: this.state.Year,
            poster: this.state.Poster,
            price: this.state.Price,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/thegame/' + this.state._id, addGame)
            .then(response => {
                console.log(response.data)
            })
            .catch();
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
                        <label>Game Poster: </label>
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
                            value='Edit Game in the Wishlist'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}