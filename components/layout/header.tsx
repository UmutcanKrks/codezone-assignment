import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const navigationItems = [
    { label: "HABERLER", href: "/haberler" },
    { label: "ETKİNLİKLER", href: "/etkinlikler" },
    { label: "MÜZİKLER", href: "/muzikler" },
    { label: "VİDEOLAR", href: "/videolar" },
    { label: "İLETİŞİM", href: "/iletisim" },
  ]

  return (
    <header
      className="font-saira fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 flex items-center backdrop-blur-md border-b border-[#2A2A2A]"
      style={{ backgroundColor: "rgba(18, 18, 18, 0.1)" }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/rapkology-logo.png"
            alt="Rapkology Logo"
            width={235}
            height={60}
            className="ml-24"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-12 ml-36">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-rapkology-white text-sm font-medium hover:text-rapkology-yellow transition-colors tracking-wide"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right Side - Search and Login */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Search Icon */}
        <button className="text-white hover:text-rapkology-yellow transition-colors">
          <Image
            src="/common/search.svg"
            alt="Search"
            width={24}
            height={22}
            className="w-6 h-5"
          />
        </button>

        {/* Login Button */}
        <button
          className="bg-white text-black px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors rounded-sm"
        >
          GİRİŞ YAP
        </button>
      </div>
    </header>
  )
}
