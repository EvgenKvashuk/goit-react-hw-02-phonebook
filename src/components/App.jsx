import React, { Component } from "react";
import Form from "./Form/Form";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";

class App extends Component {
  // ==============================================================================
  state = {
    contacts: [],
    filter: '',
  }
  // ==============================================================================
  // CUSTOM METHODS
  addContact = (name, number) => {
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

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }
  // ==============================================================================
  render() {
    const { contacts, filter } = this.state

    const NormToLowerCaseFilter = this.state.filter.toLowerCase()
    const FilteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(NormToLowerCaseFilter));

    return (
      <>
        <Form
          onSubmit={this.addContact}
        />

        <Filter
          valey={filter}
          onChange={this.changeFilter}
        />

        <ContactsList
          contacts={FilteredContacts}
        />


      </>
    );
  };
}

export default App;