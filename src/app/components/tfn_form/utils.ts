// Adapted from (Apache-2.0): https://github.com/steveswinsburg/tfn-validator/blob/93a76299c31021adc7efd132e4fed9f75083b588/tfn-validator.html

import { ValidationMessageType } from "@/app/providers/tfn_provider";

export const validateTFN = (
  tfnInput: string | number,
): ValidationMessageType => {
  let tfn = tfnInput.toString();

  //remove spaces and update
  tfn = tfn.replace(/\s+/g, "");

  //remove hyphens and update
  tfn = tfn.replace(/[-]/g, "");

  //validate only digits
  const isNumber = /^[0-9]+$/.test(tfn);
  if (!isNumber) {
    return {
      isValid: false,
      message: "Invalid TFN, only numbers are allowed.",
    };
  }

  //validate length
  const length = tfn.length;
  if (length != 9) {
    return {
      isValid: false,
      message: "Invalid TFN, must have 9 digits.",
    };
  }

  const digits = tfn.split("");

  //do the calcs
  const sum =
    parseInt(digits[0]) * 1 +
    parseInt(digits[1]) * 4 +
    parseInt(digits[2]) * 3 +
    parseInt(digits[3]) * 7 +
    parseInt(digits[4]) * 5 +
    parseInt(digits[5]) * 8 +
    parseInt(digits[6]) * 6 +
    parseInt(digits[7]) * 9 +
    parseInt(digits[8]) * 10;

  const remainder = sum % 11;

  if (remainder == 0) {
    return {
      isValid: true,
      message: "Valid TFN, hooray!",
    };
  } else {
    return {
      isValid: false,
      message: "Invalid TFN, check the digits.",
    };
  }
};
