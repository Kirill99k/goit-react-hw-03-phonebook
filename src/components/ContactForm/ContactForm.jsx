import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  FormStyle,
  InputName,
  InputGroup,
  InputLabel,
  Button,
  ErrorMessageStyle,
} from './ContactForm.styled';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  number: yup
    .string()
    .required('The number is mandatory!')
    .matches(phoneRegExp, 'The number must consist of numbers (at least 7)')
    .min(7, 'The number must be at least 7 digits long'),
});

const nameId = nanoid();
const numberId = nanoid();
const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyle>
        <InputGroup>
          <InputLabel htmlFor={nameId}>Name</InputLabel>
          <InputName
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameId}
          />
          <ErrorMessageStyle name="name" component="div" />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor={numberId}>Phone</InputLabel>
          <InputName
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={numberId}
          />
          <ErrorMessageStyle name="number" component="div" />
        </InputGroup>
        <Button type="submit">Add contact</Button>
      </FormStyle>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};