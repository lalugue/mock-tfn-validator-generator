import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar text-right m-4">
      <Link className="mx-4" href="/">
        Home
      </Link>
      <Link className="mx-4" href="/generator">
        Generate TFN
      </Link>
    </div>
  );
}
