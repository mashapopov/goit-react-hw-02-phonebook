import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './ContactForm.scss';

export class ContactForm extends Component {
  loginInputId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId} className="Form__label">
          Name
          <input
            className="Form__input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.loginInputId} className="Form__label">
          Number
          <input
            className="Form__input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className="Form__btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
