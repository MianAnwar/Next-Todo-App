import Link from "next/link";

export default function Header() {
  return (
    <header className="p-5 bg-yellow-500">
      <Link href="/" className="px-2 py-1 bg-white text-yellow-500 rounded-lg m-3">Home</Link>
      <Link href="/todo" className="px-2 py-1 bg-white text-yellow-500 rounded-lg m-3">Todo-API</Link>
    </header>
  );
}