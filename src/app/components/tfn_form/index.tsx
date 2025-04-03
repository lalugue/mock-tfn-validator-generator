"use client";

import { useContext } from "react";
import { TFNContext } from "../../providers/tfn_provider";
import TFNInput from "../tfn_input";
import { validateTFN } from "./utils";

export default function TFNForm() {
  const { tfn, setTfn, validationMessage, setValidationMessage } = useContext(TFNContext);
  return (
    <div className="tfn-form flex flex-col gap-2">
      <TFNInput handleOnChange={e => {
        setTfn(e);
        setValidationMessage(null);
      }} />
      <button
        className="p-2 rounded-lg bg-green-500 hover:bg-green-400"
        onClick={() => {
          const newValidationMessage = validateTFN(tfn)
          if(newValidationMessage){
            setValidationMessage({...newValidationMessage});
          }    
        }}>
        Validate
      </button>
      <div className="validation-message-container min-h-16">
        {validationMessage ? <span className={validationMessage.isValid ? "text-green-500" : "text-red-500"}>{validationMessage.message}</span> : <span>Enter a TFN then click &quot;Validate&quot;</span>}
      </div>
    </div>
  );
}
