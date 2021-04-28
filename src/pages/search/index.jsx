import React from 'react';
import { useParams } from 'react-router-dom';

const NotFoundPage = () => {
  const { searched } = useParams();

  return <h1>{searched}</h1>;
};

export default NotFoundPage;
