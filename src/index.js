import { App } from './components'
import { render } from 'uhtml';
import { getMonsters } from './data';

const initialState = {
  monsters: [
  ]
}

async function main (initialState) {
  const updatedState = await getMonsters(initialState);
  render(document.getElementById('app'), App(updatedState));
  return updatedState
}

main(initialState)

