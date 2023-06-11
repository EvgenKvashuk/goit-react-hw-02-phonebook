export const App = () => {
  state = {
    contacts: [],
    name: 'fsdfasdfsdf'
  }

  return (
    <div>
      <input
        type="text"
        name="{this.state.name}"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
