var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'}
]

/* Iterative */
var dogs1 = [];
for (var i = 0; i < animals.length; i++) {
  if(animals[i].species === 'dog')
    dogs1.push(animals[i]);
}
console.log('Iterative', dogs1);

/* Functional */
var dogs2 = animals.filter(function(animal){
  return animal.species === 'dog';
})
console.log('Functional', dogs2);
