import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa"
export default function Header() {
    return (
      <header className="bg-[#020202] text-[#e9e9e9] py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#e9e9e9]">KickStart</h1>
        <nav className="flex gap-10">
          <Link href="/" className="font-bold text-[#e9e9e9] hover:underline">
            Home
          </Link>
          <Link href="/about" className="font-bold text-[#e9e9e9] hover:underline">
            About
          </Link>
          <Link href="/shoes" className="font-bold text-[#e9e9e9] hover:underline">
            Shoes
          </Link>
          <Link href="/contact" className="font-bold text-[#e9e9e9] hover:underline">
            Contact
          </Link>
          <FaShoppingCart
            className="text-[#e9e9e9]"
            style={{ fontSize: "20px" }}
          />
        </nav>
      </header>
    );
  }
  