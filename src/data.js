function pad(n, length) {
  let len = length - (''+n).length;
  return (len > 0 ? new Array(++len).join('0') : '') + n
}

async function getMonsterList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
  const data = await response.json()

  return data.results
}

async function getMonsters() {
  const monsterList = await getMonsterList();

  const monsters = await Promise.all(monsterList.map(async (monster) => {
    const response = await fetch(monster.url)
    const data = response.json()
    
    return data
  }));
  const monsterArray = monsters.map(monster => {
    return {
      name: monster.name,
      liked: false,
      index: pad(monster.id, 3),
      type: monster.types
    }
  });

  return { 
    monsters: monsterArray
  }  
}

export {
  getMonsters
}
