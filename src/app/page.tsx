"use client"
import { redirect } from "next/navigation";

export default function Home() {
  if (window.location.hostname !== "localhost") {
    redirect("/generator");
  }

  return (
    <div className="home">
      <p>Welcome to TFN Validator Home!</p>
      <p>Click one of the links above to validate or generate a TFN</p>
    </div>
  );
}
