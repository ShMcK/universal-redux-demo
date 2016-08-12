const VOTE_UP = 'VOTE_UP';
const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';

export const voteUp = id => {
  return (dispatch) => {
    dispatch({ type: VOTE_UP, payload: { id }, meta: { remote: true } });
    dispatch(sortByPopularity());
  };
};
export const sortByPopularity = () => ({ type: SORT_BY_POPULARITY, meta: { remote: true } });

const defaultPokemon = [{
  id: 1,
  name: 'Luvdisc',
  description: 'This heart-shaped Pokemon earned its name by swimming after loving couples it spotted in the ocean’s waves.',
  votes: 3
}, {
  id: 2,
  name: 'Trubbish',
  description: 'Wanting more garbage, they follow people who litter. They always belch poison gas.',
  votes: 2
}, {
  id: 3,
  name: 'Stunfisk',
  description: 'Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when transmitting electricity.',
  votes: 0
}];

// thunk: a function that returns a function
function sortByKey(key) {
  return function(a, b) {
    switch(true) {
      case a[key] < b[key]:
        return 1;
      case a[key] > b[key]:
        return -1;
      default:
        return 0;
    }
  }
}

export default function reducer(pokemon = defaultPokemon, action) {
  switch (action.type) {
    case 'SET_STATE':
      console.log('SET_STATE', action.payload.state);
      return action.payload.state.pokemon;
    case VOTE_UP:
      const { id } = action.payload;
      return pokemon.map(p => {
        if (id === p.id) {
          p.votes += 1;
        }
        return p;
      });
    case SORT_BY_POPULARITY:
      return pokemon.sort(sortByKey('votes'));
    default:
      return pokemon
  }
};
