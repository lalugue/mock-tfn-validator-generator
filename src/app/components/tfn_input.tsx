"use client";

interface TFNInputProps {
  handleOnChange?: (value: string) => void;
}
export default function TFNInput({ handleOnChange = () => {} }: TFNInputProps) {
  return (
    <input
      className="border-2 border-gray-400 focus:border-blue-300"
      placeholder="Enter TFN"
      type="text"
      name="tfn"
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
    />
  );
}
