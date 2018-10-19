import React, { Component } from "react";
import AlphabetCard from "./components/AlphabetCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import alphabet from "./Alphabet.json";
import "./App.css";

class App extends Component {
  // Setting this.state.alphabet to the alphabet json array
  state = {
    alphabet,
    // randomList: []
  };
  
  selectLetter = id => {

    let alphabet = this.state.alphabet.filter(letter => letter.id !== id);
    
    let i = this.alphabet.length;
    if ( i === 0 ) return false;
    while ( --i ) {
       let j = Math.floor( Math.random() * ( i + 1 ) );
       let temp = alphabet[i];
       alphabet[i]= alphabet[j];
       alphabet[j] = temp;
  
    this.setState({ alphabet });
  };
  
//   randomList = alphabet => {
//     const i = this.state.alphabet.length;
//     if ( i === 0 ) return false;
//     while ( --i ) {
//        let j = Math.floor( Math.random() * ( i + 1 ) );
//        let temp = alphabet[i];
//        alphabet[i]= alphabet[j];
//        alphabet[j] = temp;
//        return alphabet;
// }
  }
  // Map over this.state.alphabet and render a AlphabetCard component for each Letter object
  render() {
    return (
      <Wrapper>
        <Title>Alphabet List</Title>
        {this.state.alphabet.map(letter => (
          <AlphabetCard
            // randomList = {this.randomList}
            selectLetter={this.selectLetter}
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
