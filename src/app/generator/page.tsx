"use client"

import { generateTFN } from "./utils";

export default function TFNGenerator() {
  return (
    <div className="tfn-generator flex flex-col gap-2">
      <button
        className="p-2 rounded-lg bg-green-500 hover:bg-green-400"
        onClick={generateTFN}>
        Generate
      </button>
    </div>
  );
}
