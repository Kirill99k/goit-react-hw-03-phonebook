import React, { Component } from 'react';
import { AmountContacts, ContactsContainer, Container, EmptyText, TitelContacts, TitlePhonebook } from './App.styled';
import initialContacts from 'components/data/contacts.json'
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Contacts } from 'components/Contacts';
import { GlobalStyle } from 'components/constants/GlobalStyles';


export class App extends Component  {
  state = {
    contacts: initialContacts,
    filter: '',
  }

  addContact = (name, number) => {
    const formattedNumber = this.formattedNumber(number);
    const repeatName = this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatName) {
      return alert(`${name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name,
      number: formattedNumber,
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };



  formattedNumber = number => {
    let formattedNumber = number.substring(0, 3) + '-';
    for (let i = 3; i < number.length; i += 1) {
      if ((i - 3) % 2 === 0 && i !== 3) {
        formattedNumber += '-';
      }
      formattedNumber += number[i];
    }
    return formattedNumber;
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <GlobalStyle/>
        <TitlePhonebook>Phonebook</TitlePhonebook>

        <ContactForm onSubmit={this.addContact} />

        <ContactsContainer>
          <TitelContacts>Contacts</TitelContacts>

          <AmountContacts>
            Total number of contacts: {contacts.length}
          </AmountContacts>

          <Filter value={filter} onChange={this.changeFilter} />

          {visibleContacts.length ? (
            <Contacts
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <EmptyText>No contact found</EmptyText>
          )}
        </ContactsContainer>
      </Container>
    )
  }

};
