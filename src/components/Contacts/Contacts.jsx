import PropTypes from 'prop-types';
import { ContactsList, ContactsItem, ButtonDelete, ContactName, ContactNumber } from './Contacts.styled';
export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <div>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
          </div>
          <ButtonDelete onClick={() => onDeleteContact(id)}>
           Delete
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};