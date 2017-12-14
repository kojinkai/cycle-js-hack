import xs from 'xstream';
import concat from 'xstream/extra/concat';

// MAKE REDUCER STREAM
// A function that takes the actions on the todo list
// and returns a stream of "reducers": functions that expect the current
// todosData (the state) and return a new version of todosData.
const compilePayload = action => ({ name: action.type, value: action.payload });

function makeReducer$(action$) {

  const updatePlayerOneNameReducer$ = action$
    .filter(a => a.type === 'updatePlayerOneName')
    .map(compilePayload)
    .startWith('');

  const updatePlayerTwoNameReducer$ = action$
    .filter(a => a.type === 'updatePlayerTwoName')
    .map(compilePayload)
    .startWith('');

  const updateTeamNameReducer$ = action$
    .filter(a => a.type === 'updateTeamName')
    .map(compilePayload)
    .startWith('');

  return xs.combine(
    updatePlayerOneNameReducer$,
    updatePlayerTwoNameReducer$,
    updateTeamNameReducer$,
  );
}

// THIS IS THE MODEL FUNCTION
// It expects the actions coming in from the sources
function model(action$) {
  return makeReducer$(action$);
}

export default model;
