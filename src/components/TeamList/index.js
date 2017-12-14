import xs from 'xstream';
import intent from './intent';
import model from './model';
import view from './view';
import Team from '../Team';
import Collection from '@cycle/collection';
import {div, button} from '@cycle/dom';

function TeamList (sources) {

  const action$ = intent(sources.DOM);
  const state$ = model(action$);

  const add$ = action$
    .filter(action => action.type === 'submitTeam')
    .map(action => ({
      props$: xs.of({ teamData: action.payload }),
    }));

  const teamItems$ = Collection(Team, sources, add$);

  const teamItemVtrees$ = Collection.pluck(teamItems$, item => item.DOM);

  const combinedState$ = xs.combine(state$, teamItemVtrees$);
  // THE VIEW (MVI PATTERN)

  const vdom$ = view(combinedState$);

  const sinks = {
    DOM: vdom$
  };

  return sinks
}

export default TeamList;
