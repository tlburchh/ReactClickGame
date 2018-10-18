import React, { Component } from "react";
import FriendCard from "./components/AlphabateCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import alphabet from "./selection.json";
import "./App.css";

class App extends Component {
  // Setting this.state.alphabet to the alphabet json array
  state = {
    alphabet
  };

  removeFriend = id => {
    // Filter this.state.alphabet for alphabet with an id not equal to the id being removed
    const alphabet = this.state.alphabet.filter(friend => friend.id !== id);
    // Set this.state.alphabet equal to the new alphabet array
    this.setState({ alphabet });
  };

  // Map over this.state.alphabet and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>alphabet List</Title>
        {this.state.alphabet.map(letter => (
          <FriendCard
            removeFriend={this.removeLetter}
            id={letter.id}
            key={letter.id}
            name={letter.name}
            // image={letter.image}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
