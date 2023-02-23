function createPhoneNumber(numbers: number[]): string {
  const nString: string = numbers.join("");
  return (
    "(" +
    nString.substring(0, 3) +
    ") " +
    nString.substring(3, 3) +
    "-" +
    nString.substring(6)
  );
}

function createPhoneNumberWithReplace(numbers: number[]): string {
  return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
}
