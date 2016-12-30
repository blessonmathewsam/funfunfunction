/* Coundown */

let countDownFrom = (num) => {
  if (num === -1) return;
  console.log(num);
  countDownFrom(num-1);
}

countDownFrom(10);

/* Another cool recursion*/

let categories = [
  {id: 'animals', parent: null},
  {id: 'mammals', parent: 'animals'},
  {id: 'cats', parent: 'mammals'},
  {id: 'dogs', parent: 'mammals'},
  {id: 'chihuahua', parent: 'dogs'},
  {id: 'labrador', parent: 'dogs'},
  {id: 'persian', parent: 'cats'},
  {id: 'siamese', parent: 'cats'},
  {id: 'ghosts', parent: null},
  {id: 'casper', parent: 'ghosts'}
]

let makeTree = (categories, parent) => {
  let node = {};
  categories.filter(x => x.parent === parent)
            .forEach(x => node[x.id] = makeTree(categories, x.id))
  return node;
}

console.log(JSON.stringify(makeTree(categories, null), null, 2));

/* Output */
/*
{
  "animals": {
    "mammals": {
      "cats": {
        "persian": {},
        "siamese": {}
      },
      "dogs": {
        "chihuahua": {},
        "labrador": {}
      }
    }
  },
  "ghosts": {
    "casper": {}
  }
}
*/
