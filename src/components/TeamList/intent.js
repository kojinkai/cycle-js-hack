import xs from 'xstream';
import { fromJS } from 'immutable';
export default function intent(DOMSource) {

  return xs.merge(
    DOMSource.select('.playerOne').events('keydown')
      .map(ev => String(ev.target.value).trim())
      .map(payload => ({type: 'updatePlayerOneName', payload})),

    DOMSource.select('.playerTwo').events('keydown')
      .map(ev => String(ev.target.value).trim())
      .map(payload => ({type: 'updatePlayerTwoName', payload})),

    DOMSource.select('.teamName').events('keydown')
      .map(ev => String(ev.target.value).trim())
      .map(payload => ({type: 'updateTeamName', payload})),

    DOMSource.select('.add-team-form').events('submit', { preventDefault: true })
      .map(ev => Object.keys(ev.target)
        .map(key => ev.target[key])
        .filter(input => input.type !== 'submit')
        .map(input => {
          const { name, value } = input;
          return { name, value }
        })
      )
      .map(payload => ({
        type: 'submitTeam',
        payload: fromJS(payload),
      }))
  )
}