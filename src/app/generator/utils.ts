import { validateTFN } from "../components/tfn_form/utils";

export const generateTFN = () => {
  let tfn = Math.floor(Math.random() * 10 ** 9);

  while (!validateTFN(tfn)?.isValid) {
    tfn = Math.floor(Math.random() * 10 ** 9);
  }

  alert(tfn);
};
