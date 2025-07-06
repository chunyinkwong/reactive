import React from 'react';
import { useParams } from 'react-router-dom';

const ReactInfo = () => (
  <div>
    <h3>React Information</h3>
    <p>React is a popular JavaScript library for building user interfaces, maintained by Meta and a community of individual developers and companies.</p>
    <p>It is known for its component-based architecture, which allows developers to create reusable UI components, and its use of a virtual DOM, which can improve performance.</p>
  </div>
);

const SvelteInfo = () => (
  <div>
    <h3>Svelte Information</h3>
    <p>Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.</p>
  </div>
);

const NotImplemented = () => <h2>Not implemented yet</h2>;

const InfoPage = () => {
  const { slug } = useParams();

  if (slug === 'react') {
    return <ReactInfo />;
  }
  if (slug === 'svelte') {
    return <SvelteInfo />;
  }

  return <NotImplemented />;
};

export default InfoPage;
