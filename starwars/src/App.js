import React, { Component } from 'react';
import './App.css';
import Display  from "./components/DisplayCharacter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  addChar = e => {
    e.preventDefault();
    // immutability in react/javascript
    const newCharacter = {
      name: this.state.name,
      gender: this.state.gender,
      birth_year: this.state.birth_year,
      skin_color: this.state.skin_color,
      height: this.state.height
    };
    this.setState({
      starwarsChars: [...this.state.starwarsChars, newCharacter], //copy array, create newArray with an added student
      name: '',
      gender: '',
      birth_year: '',
      skin_color: '',
      height: ''
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="list-char">
            {this.state.starwarsChars.map((char, id) => (
              <Display key={id} character={char}/>
            ))}
          </div>
          
          <form onSubmit={this.addChar}>
          {/* Event - onChange */}
          <input
            placeholder="Name"
            onChange={this.handleChanges}
            value={this.state.name}
            name="name"
          />
          <input
            placeholder="Gender"
            onChange={this.handleChanges}
            value={this.state.gender}
            name="gender"
          />
          <input
            placeholder="BirthYear(in BBY )"
            onChange={this.handleChanges}
            value={this.state.birth_year}
            name="birth_year"
          />
          <input
            placeholder="Skin Color"
            onChange={this.handleChanges}
            value={this.state.skin_color}
            name="skin_color"
          />
          <input
            placeholder="Height(in cm)"
            onChange={this.handleChanges}
            value={this.state.height}
            name="height"
          />
           {/* Event Handler - onClick */}
          <button onClick={this.addChar}>ADD CHARACTER</button>
          </form>
        </div>        
    );
  }
}

export default App;
