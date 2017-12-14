export default function view(state$) {
  // data here is an Immutable List
  // exported by intent.js
  const getFieldValueFromName = data => name => data
    .find(field => field.get('name') === name)
    .get('value');

  return state$
    .map(props => {
      const populateDisplayField = getFieldValueFromName(props.teamData);

      return (
        <div className="team">
          <p>Player One: <span>{populateDisplayField('playerOne')}</span></p>
          <p>Player Two: <span>{populateDisplayField('playerTwo')}</span></p>
          <p>Team: <span>{populateDisplayField('team')}</span></p>
        </div>
      );
    });
}