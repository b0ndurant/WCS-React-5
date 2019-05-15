import React, { Component } from 'react';
import GenerateQuote from './GenerateQuote';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: '',
    };
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote = () => {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quotes: data[0],
        });
      });
  }

  render() {
    return (
      <>
        <GenerateQuote generateQuote={() => this.getQuote()} quote={this.state.quotes} />
      </>
    )
  }
}

export default App;
