import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      redirect("/generator");
    }
  }, []);

  return (
    <div className="home">
      <p>Welcome to TFN Validator Home!</p>
      <p>Click one of the links above to validate or generate a TFN</p>
    </div>
  );
}
