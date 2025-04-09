"use client";
import { createContext, ReactNode, useState } from "react";

type TFNContextType = {
  tfn: string;
  setTfn: (tfn: string) => void;
  validationMessage: ValidationMessageType | null;
  setValidationMessage: (msg: ValidationMessageType) => void;
};

export type ValidationMessageType = {
  isValid: boolean;
  message: string;
} | null;

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
  const [validationMessage, setValidationMessage] =
    useState<ValidationMessageType>(null);

  return (
    <TFNContext.Provider
      value={{ tfn, setTfn, validationMessage, setValidationMessage }}
    >
      {children}
    </TFNContext.Provider>
  );
}

interface TFNContextProviderProps {
  children: ReactNode;
}
