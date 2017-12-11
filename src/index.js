import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import TeamList from './components/TeamList'

const main = TeamList;

const drivers = {
  DOM: makeDOMDriver('#root')
}

run(main, drivers)
