// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './configureStore';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
   <App/>
  </Provider>
);