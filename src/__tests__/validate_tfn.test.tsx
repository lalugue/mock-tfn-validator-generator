import { expect, test } from "vitest";
import { validateTFN } from "@/app/components/tfn_form/utils";

test("validateTFN", () => {
  const validationMessage = validateTFN(123456782);
  expect(validationMessage?.isValid).toBeTruthy();
});

test("invalid TFN", () => {
  expect(validateTFN(123456789)?.isValid).toBeFalsy();
  expect(validateTFN("")?.isValid).toBeFalsy();
  expect(validateTFN(123)?.isValid).toBeFalsy();
});
