import React from 'react';
import Header from '../Components/Header';
import Categories from '../Components/Categories';

const Home = ({ setCategorySelected }) => {
  return (
    <>
      <Header title='Categories' />
      <Categories setCategorySelected={setCategorySelected} />
    </>
  );
}

export default Home;
