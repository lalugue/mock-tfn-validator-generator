"use client";

import { useState } from "react";
import { generateTFN } from "./utils";
import TFNOutput from "../components/tfn_output";

export default function TFNGenerator() {
  const [tfn, setTfn] = useState<string | number>("");
  return (
    <div className="tfn-generator flex flex-col gap-2">
      <TFNOutput tfn={tfn} />
      <button
        className="p-2 rounded-lg bg-green-500 hover:bg-green-400"
        onClick={() => {
          setTfn(generateTFN());
        }}
      >
        Generate Mock TFN
      </button>
    </div>
  );
}
