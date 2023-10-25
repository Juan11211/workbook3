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

  // middle name
  let displayMiddleName = name.substring(firstName + 1, lastName);

  console.log(`First name is: ${displayFirst}`);
  console.log(`Middle Name is: ${displayMiddleName}`)
  console.log(`Last name is: ${displayLast}`);

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Burger Auston");
parseAndDisplayName("Siddalee Grace");
