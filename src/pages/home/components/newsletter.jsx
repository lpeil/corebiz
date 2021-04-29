import React, { useState } from 'react';
import * as yup from 'yup';

import { Grid, TextField, Button } from '@material-ui/core';

const errorName = 'Preencha com seu nome completo';
const errorEmail = 'Preencha com um e-mail válido';

const HomeNewsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});

    const data = {
      name, email,
    };

    const schema = yup.object().shape({
      name: yup.string(errorName).required(errorName),
      email: yup.string(errorEmail).email(errorEmail).required(errorEmail),
    });

    schema
      .validate(data, {
        abortEarly: false,
      })
      .then((value) => {
        // eslint-disable-next-line no-console
        console.log(value);
      })
      .catch((yupErrors) => {
        const formErros = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const yupError of yupErrors.inner) {
          formErros[yupError.path] = yupError.message;
        }

        setErrors(formErros);
      });

    return true;
  };

  return (
    <Grid container direction="column" alignItems="center" className="newsletter">
      <Grid item>
        <h1 className="newsletter-title">Participe de nossas news com promoções e novidades!</h1>
      </Grid>
      <Grid item>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <TextField
            name="text"
            type="text"
            variant="outlined"
            placeholder="Digite seu nome"
            value={name}
            error={!!errors?.name}
            helperText={errors?.name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            name="email"
            type="email"
            variant="outlined"
            placeholder="Digite seu email"
            value={email}
            error={!!errors?.email}
            helperText={errors?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Eu quero!</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default HomeNewsletter;
