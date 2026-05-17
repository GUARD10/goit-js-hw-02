'use strict';

const bannedWords = ['spam', 'sale'];

function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();

  for (const word of bannedWords) {
    if (normalizedMessage.includes(word)) {
      return true;
    }
  }

  return false;
}

console.log('Task 3:');
OutputHelper.printResult('task-3-output', checkForSpam("Latest technology news"));
OutputHelper.printResult('task-3-output', checkForSpam("JavaScript weekly newsletter"));
OutputHelper.printResult('task-3-output', checkForSpam("Get best sale offers now!"));
OutputHelper.printResult('task-3-output', checkForSpam("Amazing SalE, only tonight!"));
OutputHelper.printResult('task-3-output', checkForSpam("Trust me, this is not a spam message"));
OutputHelper.printResult('task-3-output', checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
