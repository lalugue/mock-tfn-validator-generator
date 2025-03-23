"use client";

import { useContext } from "react";
import { TFNContext } from "../../providers/tfn_provider";
import TFNInput from "../tfn_input";

export default function TFNForm() {
  // @TODO: add tfn as param for validation calls, etc
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tfn, setTfn } = useContext(TFNContext);
  return (
    <div className="tfn-form">
      <TFNInput handleOnChange={setTfn} />
      <button
        className="p-2 rounded-lg bg-green-500 hover:bg-green-400"
        onClick={() => {
          // @TODO: add validation calls, etc here
          // noop
        }}>
        Validate
      </button>
    </div>
  );
}
