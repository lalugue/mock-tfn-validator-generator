"use client";
import { createContext, ReactNode, useState } from "react";

type TFNContextType = {
  tfn: string;
  setTfn: (tfn: string) => void;
};

const defaultTFNContext = {
  tfn: "",
  setTfn: () => {},
};

export const TFNContext = createContext<TFNContextType>(defaultTFNContext);

export default function TFNContextProvider({
  children,
}: TFNContextProviderProps) {
  const [tfn, setTfn] = useState("");

  return (
    <TFNContext.Provider value={{ tfn, setTfn }}>
      {children}
    </TFNContext.Provider>
  );
}

interface TFNContextProviderProps {
  children: ReactNode;
}
