import React, { Component } from "react";
import Form from "./Form/Form";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleImput = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    form.reset();
  }

  render() {
    return (
      <>
       <form action="submit">
                    <label htmlFor="">
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                        />
                    </label>

                    <label htmlFor="">
                        Contacts
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={this.state.contacts[0]}
                        />
                    </label>
                    <button>Add contact</button>
                </form>

      </>
    );
  };
}

export default App;