"use client";

import { useState } from "react";
import { generateTFN } from "./utils";

export default function TFNGenerator() {
  const [tfn, setTfn] = useState<string | number>("");
  return (
    <div className="tfn-generator flex flex-col gap-2">
      <span className="bg-gray-300 border-4 border-black border-dashed p-4">
        {tfn}
      </span>
      <button
        className="p-2 rounded-lg bg-green-500 hover:bg-green-400"
        onClick={() => {
          setTfn(generateTFN());
        }}
      >
        Generate
      </button>
    </div>
  );
}
