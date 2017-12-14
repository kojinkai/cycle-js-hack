export default function view(state$) {
  // data here is an Immutable List
  // exported by intent.js
  const getTeamEntryFromData = data => data
    .map(field => (<p>{field.get('name')}: <span>{field.get('value')}</span></p>))
    .toJS();

  return state$
    .map(props => {
      const { teamData } = props;
      return (
        <div className="team">
          { getTeamEntryFromData(teamData) }
        </div>
      );
    });
}