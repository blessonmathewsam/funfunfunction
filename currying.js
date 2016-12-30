var dragon1 =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

console.log(dragon1('toothless')('tiny')('lightning'));

/* Using lodash - Convert normal function to curried function */
var dragon2 = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!'

var _ = require('lodash');
var dragon2 = _.curry(dragon2);
var toothless = dragon2('toothless');
var tiny = toothless('tiny');
console.log(tiny('lightning'));

/* Another cool use of currying */
var dragons = [
  {name: 'fluffykins', element: 'lightning'},
  {name: 'noomi', element: 'lightning'},
  {name: 'karo', element: 'fire'},
  {name: 'doomer', element: 'timewarp'}
]

var hasElement = _.curry((element, obj) => obj.element === element)
var lightningDragons = dragons.filter(hasElement('lightning'));
console.log(lightningDragons);
