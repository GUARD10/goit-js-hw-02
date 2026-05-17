'use strict';

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  }

  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log('Task 1:');
OutputHelper.printResult('task-1-output', makeTransaction(5, 3000, 23000));
OutputHelper.printResult('task-1-output', makeTransaction(3, 1000, 15000));
OutputHelper.printResult('task-1-output', makeTransaction(10, 5000, 8000));
OutputHelper.printResult('task-1-output', makeTransaction(8, 2000, 10000));
OutputHelper.printResult('task-1-output', makeTransaction(10, 500, 5000));
console.log('===================================');
