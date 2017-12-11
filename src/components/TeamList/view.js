export default function view(state$) {
  return state$
    .map(userInput =>
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