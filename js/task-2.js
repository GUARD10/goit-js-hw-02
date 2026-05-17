'use strict';

function formatMessage(message, maxLength) {
  return message.length > maxLength
    ? `${message.slice(0, maxLength)}...`
    : message;
}

console.log('Task 2:');
OutputHelper.printResult('task-2-output', formatMessage("Curabitur ligula sapien", 16));
OutputHelper.printResult('task-2-output', formatMessage("Curabitur ligula sapien", 23));
OutputHelper.printResult('task-2-output', formatMessage("Vestibulum facilisis purus nec", 20));
OutputHelper.printResult('task-2-output', formatMessage("Vestibulum facilisis purus nec", 30));
OutputHelper.printResult('task-2-output', formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
OutputHelper.printResult('task-2-output', formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
console.log('===================================');
