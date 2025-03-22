"use client";

type TFNInputProps = {
  handleOnChange?: (value: string) => void;
};

const defaultTFNProps = {
  handleOnChange: () => {},
};

export default function TFNInput(props: TFNInputProps) {
  const { handleOnChange } = { ...defaultTFNProps, ...props };
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
