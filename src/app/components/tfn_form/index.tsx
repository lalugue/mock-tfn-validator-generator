"use client";

import { useContext } from "react";
import { TFNContext } from "../../providers/tfn_provider";
import TFNInput from "../tfn_input";
import { validateTFN } from "./utils";

export default function TFNForm() {
  // @TODO: add tfn as param for validation calls, etc
  const { tfn, setTfn } = useContext(TFNContext);
  return (
    <div className="tfn-form">
      <TFNInput handleOnChange={setTfn} />
      <button
        className="p-2 rounded-lg bg-green-500 hover:bg-green-400"
        onClick={() => {
          validateTFN(tfn);
        }}>
        Validate
      </button>
    </div>
  );
}
