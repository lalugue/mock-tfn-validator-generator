import TFNContextProvider from "../providers/tfn_provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TFNContextProvider>{children}</TFNContextProvider>;
}
