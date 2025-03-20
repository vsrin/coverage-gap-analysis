import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Choose which version to use by uncommenting only ONE of these lines:
import App from './App'; // Dynamic data loading version (uses JSON files)
//import App from './AppWithWiki'; // Version with Wiki feature
// import App from './StaticDataApp'; // Static data version (no JSON files needed)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);