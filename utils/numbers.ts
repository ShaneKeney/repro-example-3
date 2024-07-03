export function isNumber(str: string) {
  const toCheck = trimCharacterFromEnd(str, '.');
  // Use the unary plus operator (+) to convert the string to a number and check if it's NaN
  // Also, ensure the string is not empty and contains only valid numeric characters
  return (
    !isNaN(+toCheck) && toCheck.trim() !== '' && /^[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?$/.test(toCheck)
  );
}

export function trimCharacterFromEnd(inputString: string, characterToTrim: string) {
  let trimmedString = inputString;

  while (trimmedString.endsWith(characterToTrim)) {
    trimmedString = trimmedString.slice(0, -1);
  }

  return trimmedString;
}