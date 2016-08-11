import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../index';
import PokemonList from './PokemonList';

const App = () => (
  <div className="container">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Worst Pokemon</h1>
        <p className="lead">Vote for the worst Pokemon</p>
      </div>
      <PokemonList />
    </div>
  </div>
);

export default function render() {
  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
  )
}
