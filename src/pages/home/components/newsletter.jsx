import React, { useState } from 'react';
import * as yup from 'yup';

import { Grid, TextField, Button } from '@material-ui/core';

import { apiSubscribeNewsletter } from '../../../services/newsletter';

const errorName = 'Preencha com seu nome completo';
const errorEmail = 'Preencha com um e-mail válido';

const HomeNewsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});

    const schema = yup.object().shape({
      name: yup.string(errorName).required(errorName),
      email: yup.string(errorEmail).email(errorEmail).required(errorEmail),
    });

    schema
      .validate({ name, email }, {
        abortEarly: false,
      })
      .then((values) => {
        apiSubscribeNewsletter(values)
          .then(() => setSubscribed(true));
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
      {
        subscribed
          ? (
            <>
              <Grid item>
                <h2 className="subscribed-title">
                  Seu e-mail foi cadastrado com sucesso!
                </h2>
              </Grid>
              <Grid item>
                <p className="subscribed-subtitle">
                  A partir de agora você receberá as novidade e ofertas exclusivas.
                </p>
              </Grid>
              <Grid item>
                <Button
                  type="button"
                  className="button-new-email"
                  onClick={() => setSubscribed(false)}
                >
                  Cadastrar novo e-mail
                </Button>
              </Grid>
            </>
          )
          : (
            <>
              <Grid item>
                <h1 className="newsletter-title">
                  Participe de nossas news com promoções e novidades!
                </h1>
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
            </>
          )
      }
    </Grid>
  );
};

export default HomeNewsletter;
