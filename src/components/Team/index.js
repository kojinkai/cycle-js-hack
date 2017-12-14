import xs from 'xstream';
import view from './view';

function Team (sources) {
  const vdom$ = view(sources.props$);

  const sinks = {
    DOM: vdom$,
  };

  return sinks;
}

export default Team;
