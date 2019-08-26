import React from 'react';
import Head from 'next/head';
import Nav from '../components/Core/Nav';
import Card from '../components/Core/Card';
import Button from '../components/Core/Button';
 
const Home = () => (
  <div>
    <Head>
      <title>Hello World Ask #4.0</title>
    </Head>
    <Nav />
    <Button/>
    <Card />
    
  </div>
);

export default Home;
