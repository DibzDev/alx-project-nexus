import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Kheir<span className="text-blue-600">Electronics</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Cart placeholder */}
        <Link
          href="/cart"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 transition"
        >
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
