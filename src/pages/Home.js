import React from 'react';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Why Svelte is Better than React</h1>
      <Card 
        title="Less Boilerplate"
        content="Svelte components have less boilerplate code compared to React, making them easier to write and read."
      />
      <Card 
        title="True Reactivity"
        content="Svelte is a compiler that writes highly efficient imperative code that surgically updates the DOM. No virtual DOM diffing."
      />
    </div>
  );
};

export default Home;

