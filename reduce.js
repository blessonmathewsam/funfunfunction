var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

/* Iterative */
var totalAmount1 = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount1 += orders[i].amount;
}
console.log('Iterative', totalAmount1);

/* Functional */
var totalAmount2 = orders.reduce( (sum, order) => sum + order.amount, 0);
console.log('Functional', totalAmount2);
