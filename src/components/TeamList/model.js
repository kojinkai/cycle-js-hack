import xs from 'xstream';

export default function model(actions) {
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