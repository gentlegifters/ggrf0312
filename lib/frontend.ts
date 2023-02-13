export function formatPhoneNumber(value: string) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, "");

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early

  if (phoneNumberLength < 9) return phoneNumber;

  if (phoneNumberLength < 10) {
    return `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(
      2,
      5
    )}-${phoneNumber.slice(5, 9)}`;
  }

  if (phoneNumberLength < 11) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  if (phoneNumberLength < 12) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      7
    )}-${phoneNumber.slice(7, 11)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
    3,
    7
  )}-${phoneNumber.slice(7, 11)}`;
}
