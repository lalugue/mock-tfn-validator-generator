import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      <Link href="/generator">Generate TFN</Link>
    </div>
  );
}
