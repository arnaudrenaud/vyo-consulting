import { PATHS } from "@/lib/urls";
import Link from "next/link";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 p-2 text-sm text-black bg-mint-500">
      <Link href={PATHS.HOME}>Home</Link>
    </nav>
  );
}
