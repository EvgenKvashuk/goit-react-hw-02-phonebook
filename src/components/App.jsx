import React, { Component } from "react";
import Form from "./Form/Form";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addContact = (name, number) => {
    // console.log(this.state)

    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }))
  }

  formSubmitHandler = data => {
    console.log(data)
  }

  render() {
    return (
      <>
        <Form onSubmit={this.addContact} />

        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.name}>{contact.name} - {contact.number}</li>
          ))}
        </ul>
      </>
    );
  };
}

export default App;