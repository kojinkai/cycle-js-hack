export default function view(state$) {
  return state$
    .map(userInput => {
      return (
        <div className="wrapper">
          <section className="team-list">
            <p>{userInput}</p>
          </section>
          <form name="add-team" className="add-team-form">
            <input name="playerOne" type="text" className="playerOne"/>
            <input name="playerTwo" type="text" className="playerTwo"/>
            <input name="team" type="text" className="teamName"/>
            <input type="submit" className="submit-team" value="add team" />
          </form>
        </div>
      );
    });
}