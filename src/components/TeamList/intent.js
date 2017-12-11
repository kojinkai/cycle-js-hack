  export default function intent(domSource) {
    return {
      playerOneNameInput$: domSource.select('.playerOne').events('keyup').map(ev => ev.target.value),
      playerTwoNameInput$: domSource.select('.playerTwo').events('keyup').map(ev => ev.target.value),
      teamNameInput$: domSource.select('.teamName').events('keyup').map(ev => ev.target.value),
      submitTeam$: domSource.select('.submit-team').events('click', { preventDefault: true }),
    };
  }