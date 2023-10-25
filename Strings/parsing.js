"use strict";

function parseAndDisplayName(name) {
  // Find the index of the first name
  let firstName = name.indexOf(" ");

  // Find the index of the last name
  let lastName = name.lastIndexOf(" ");

  // Extract the first name
  let displayFirst = name.substring(0, firstName);

  // Extract the last name
  let displayLast = name.substring(lastName + 1);

  console.log(`First name is: ${displayFirst}`);
  console.log(`Last name is: ${displayLast}`);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
