'use strict';

function getShippingCost(country) {
  let cost;

  switch (country) {
    case "China":
      cost = 100;
      break;

    case "Chile":
      cost = 250;
      break;

    case "Australia":
      cost = 170;
      break;

    case "Jamaica":
      cost = 120;
      break;

    default:
      return "Sorry, there is no delivery to your country";
  }

  return `Shipping to ${country} will cost ${cost} credits`;
}

OutputHelper.printResult('task-4-output', getShippingCost("Australia"));
OutputHelper.printResult('task-4-output', getShippingCost("Germany"));
OutputHelper.printResult('task-4-output', getShippingCost("China"));
OutputHelper.printResult('task-4-output', getShippingCost("Chile"));
OutputHelper.printResult('task-4-output', getShippingCost("Jamaica"));
OutputHelper.printResult('task-4-output', getShippingCost("Sweden"));
