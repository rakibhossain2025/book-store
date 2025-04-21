import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
  const api = useLoaderData()

  return (
    <>
      <Banner></Banner>
      <Books api={api}></Books>
    </>
  );
};

export default Home;