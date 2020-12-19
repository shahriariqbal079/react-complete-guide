import React, { Component } from "react";
import "./App.css";
/* import Radium, { StyleRoot } from "radium"; */
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "dwda", name: "Max", age: 24 },
      { id: "rfwf", name: "Manu", age: 30 },
      { id: "sfawad", name: "Stafenie", age: 26 },
    ],
    otherState: "Some Other Value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 24 },
        { name: "Manu", age: 30 },
        { name: "Stafenie", age: 106 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1> Hi </h1>
        <p className={classes.join(" ")}>This is really working</p>

        <button style={style} onClick={() => this.togglePersonHandler()}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

/* export default Radium(App); */
export default App;
