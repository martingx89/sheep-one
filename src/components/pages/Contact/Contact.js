import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button } from '@mui/material';
import styles from './Contact.module.scss';

const Contact = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Pole Imię jest wymagane';
    }

    if (!values.email) {
      errors.email = 'Pole Email jest wymagane';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Nieprawidłowy adres email';
    }

    if (!values.message) {
      errors.message = 'Pole Wiadomość jest wymagane';
    }

    return errors;
  };

  return (
    <Formik initialValues={{ name: '', email: '', message: '' }} onSubmit={handleSubmit} validate={validate}>
      <Form>
        <div>
          <Field as={TextField} id='name' name='name' label='Imię' variant='outlined' fullWidth />
          <ErrorMessage name='name' component='div' className={styles.error} />
        </div>

        <div>
          <Field as={TextField} type='email' id='email' name='email' label='Email' variant='outlined' fullWidth />
          <ErrorMessage name='email' component='div' className={styles.error} />
        </div>

        <div>
          <Field
            as={TextField}
            id='message'
            name='message'
            label='Wiadomość'
            variant='outlined'
            fullWidth
            multiline
            rows={4}
          />
          <ErrorMessage name='message' component='div' className={styles.error} />
        </div>

        <Button type='submit' variant='contained' className={styles.button}>
          Wyślij
        </Button>
      </Form>
    </Formik>
  );
};

export default Contact;
