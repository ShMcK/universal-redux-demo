import store from './store';
import render from './components';
import {voteUp} from '../shared/modules/pokemon';

// Test: dispatch updates votes
store.dispatch(voteUp(2));
store.dispatch(voteUp(2));

render();
