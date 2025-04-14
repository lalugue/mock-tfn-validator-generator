"use client";

type TFNInputProps = {
  handleOnChange?: (value: string) => void;
};

const defaultTFNInputProps = {
  handleOnChange: () => {},
};

export default function TFNInput(props: TFNInputProps) {
  const { handleOnChange } = { ...defaultTFNInputProps, ...props };
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
