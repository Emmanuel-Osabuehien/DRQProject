import React from 'react';
import { GamePage } from './gamePage';

//This is my Games class where i map games to my ReloadData function
export class Games extends React.Component {

    //Here is where i map games to my ReloadData function
    render() {
        return this.props.games.map((game) => {
            return <GamePage game={game} ReloadData={this.props.ReloadData}></GamePage>
        })
    }
}