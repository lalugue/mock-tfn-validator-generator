"use client";
import { createContext, ReactNode, useState } from "react";

type TFNContextType = {
  tfn: string;
  setTfn: (tfn: string) => void;
  validationMessage: ValidationMessageType | null;
  setValidationMessage: (msg: ValidationMessageType) => void;
};

type ValidationMessageType = {
  isValid: boolean,
  message: string,
}

const defaultTFNContext = {
  tfn: "",
  setTfn: () => {},
  validationMessage: null,
  setValidationMessage: () => {},
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
