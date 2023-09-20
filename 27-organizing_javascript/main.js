function pokemonFactory(name, level) {
  let health = level * 2;

  const getLevel = () => level;
  const getName = () => name;
  const die = () => console.log("I'm dead!");
  const damage = (x) => {
    health -= x;

    if (health <= 0) die();
  };

  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damage ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
}

const ashPlayer = pokemonFactory("Pikachu", 10);
const computrePlayer = pokemonFactory("ratata", 9);

ashPlayer.attack(computrePlayer);
computrePlayer.attack(ashPlayer);
