"use client";

import { useContext } from "react";
import { TFNContext } from "../../providers/tfn_provider";
import TFNInput from "../tfn_input";
import { validateTFN } from "./utils";

export default function TFNForm() {
  const { tfn, setTfn, validationMessage, setValidationMessage } = useContext(TFNContext);
  return (
    <div className="tfn-form">
      <TFNInput handleOnChange={setTfn} />
      <button
        className="p-2 rounded-lg bg-green-500 hover:bg-green-400"
        onClick={() => {
          setValidationMessage({...validateTFN(tfn)});
        }}>
        Validate
      </button>
      {validationMessage && <span className={validationMessage.isValid ? "text-green-500" : "text-red-500"}>{validationMessage.message}</span>}
    </div>
  );
}
