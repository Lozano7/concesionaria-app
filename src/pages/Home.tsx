import React, { useState } from 'react';
import Header from '../components/home_components/Header';
import StepsToFollow from '../components/home_components/StepsToFollow';
import { stepsHome } from '../helpers/steps';
import HomeRouter from '../routes/HomeRouter';

const Home = () => {
  return (
    <>
      <Header />
      <StepsToFollow steps={stepsHome} />
      <HomeRouter />
    </>
  );
};

export default Home;
