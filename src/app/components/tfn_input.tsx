"use client";

export default function TFNInput({ handleOnChange = () => {} }) {
  return (
    <input
      className="border-2 border-gray-400 focus:border-blue-300"
      placeholder="Enter TFN"
      type="text"
      name="tfn"
      onChange={handleOnChange}
    />
  );
}
