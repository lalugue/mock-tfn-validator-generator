"use client";

type TFNOutputProps = {
  tfn?: string | number;
};

const defaultTFNOutputProps = {
  tfn: "",
};

export default function TFNOutput(props: TFNOutputProps) {
  const { tfn } = { ...defaultTFNOutputProps, ...props };
  return (
    <span className="bg-gray-300 border-4 border-black border-dashed p-4 w-48 text-center dark:bg-gray-300 dark:text-black">
      {tfn}
    </span>
  );
}
