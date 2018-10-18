import React, { Component } from "react";
import AlphabetCard from "./components/AlphabetCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import alphabet from "./Alphabet.json";
import "./App.css";

class App extends Component {
  // Setting this.state.alphabet to the alphabet json array
  state = {
    alphabet
  };

  removeLetter = id => {
    // Filter this.state.alphabet for alphabet with an id not equal to the id being removed
    const alphabet = this.state.alphabet.filter(letter => letter.id !== id);
    // Set this.state.alphabet equal to the new alphabet array
    this.setState({ alphabet });
  };

  // Map over this.state.alphabet and render a AlphabetCard component for each Letter object
  render() {
    return (
      <Wrapper>
        <Title>Alphabet List</Title>
        {this.state.alphabet.map(letter => (
          <AlphabetCard
            removeLetter={this.removeLetter}
            id={letter.id}
            key={letter.id}
            name={letter.name}
            image={letter.image}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
