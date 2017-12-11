import xs from 'xstream';
import intent from './intent';
import model from './model';
import view from './view';

import { TeamListItem } from './components/TeamListItem';
export function App (sources) {
  
  function intent(domSource) {
    return {
      playerOneNameInput$: domSource.select('.playerOne').events('keyup').map(ev => ev.target.value),
      playerTwoNameInput$: domSource.select('.playerTwo').events('keyup').map(ev => ev.target.value),
      teamNameInput$: domSource.select('.teamName').events('keyup').map(ev => ev.target.value),
      submitTeam$: domSource.select('.submit-team').events('click', { preventDefault: true }),
    };
  }

  function view(state$) {
    return state$
      .map(userInput => console.log(userInput) ||
        <div className="wrapper">
          <section className="team-list">
          </section>
          <form name="add-team">
            <input type="text" className="playerOne"/>
            <p>{userInput.playerOne$}</p>
            <input type="text" className="playerTwo"/>
            <p>{userInput.playerTwo$}</p>
            <input type="text" className="teamName"/>
            <p>{userInput.teamName$}</p>
            <input type="submit" className="submit-team" value="add team" />
          </form>
        </div>
      );
  }

  function model(actions) {
    const playerOne$ = actions.playerOneNameInput$.startWith('');
    const playerTwo$ = actions.playerTwoNameInput$.startWith('');
    const teamName$ = actions.teamNameInput$.startWith('');
    const selection$ = actions.submitTeam$.startWith('');


    return xs.combine(playerOne$, playerTwo$, teamName$, selection$)
      .map(([playerOne$, playerTwo$, teamName$, selection$]) => ({
        playerOne$,
        playerTwo$,
        teamName$,
        selection$
      }));

  }

  const actions = intent(sources.DOM);
  const state$ = model(actions);
  const vdom$ = view(state$);

  const sinks = {
    DOM: vdom$
  };

  return sinks
}