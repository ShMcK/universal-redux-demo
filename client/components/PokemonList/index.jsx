import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Pokemon from './pokemon';
import { voteUp } from '../../../shared/modules/pokemon';

const PokemonList = ({pokemon, onVote}) => (
  <ol className="list-group">
    {pokemon.map((p, i) => <Pokemon key={i} monster={p} onVote={onVote} />)}
  </ol>
);

const mapStateToProps = state => ({ pokemon: state.pokemon });
const mapDispatchToProps = dispatch => ({
  onVote: (id) => dispatch(voteUp(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
