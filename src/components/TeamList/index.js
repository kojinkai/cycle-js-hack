import xs from 'xstream';
import intent from './intent';
import model from './model';
import view from './view';

function TeamList (sources) {

  const actions = intent(sources.DOM);
  const state$ = model(actions);
  const vdom$ = view(state$);

  const sinks = {
    DOM: vdom$
  };

  return sinks
}

export default TeamList;