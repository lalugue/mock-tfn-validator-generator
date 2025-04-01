"use client";

import TFNContextProvider from "./providers/tfn_provider";
import TFNForm from "./components/tfn_form";

export default function Home() {
  return (
    <TFNContextProvider>
      <TFNForm />
    </TFNContextProvider>
  );
}
