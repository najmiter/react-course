import { /* createElement, */ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// const mainTag = createElement('p', {
//   id: 'my-para',
//   children: createElement('span', { children: 'lorem ipsum' }),
// });

// <p>
//   <span>lorem ipsum</span>
// </p>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* {mainTag} */}
  </StrictMode>
);
