import { App } from './components'
import { render } from 'uhtml';
import { getMonsters } from './data';

const initialState = {
  monsters: [
  ]
}

async function main () {
  try {
    const updatedState = await getMonsters();
    render(document.getElementById('app'), App(updatedState));
  } catch (error) {
    console.log(error)
  }

}

main();

