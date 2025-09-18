"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { label: "HABERLER", href: "/haberler" },
    { label: "ETKİNLİKLER", href: "/etkinlikler" },
    { label: "MÜZİKLER", href: "/muzikler" },
    { label: "VİDEOLAR", href: "/videolar" },
    { label: "İLETİŞİM", href: "/iletisim" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className="font-saira fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-6 lg:px-6 py-3 md:py-4 lg:py-5 flex items-center backdrop-blur-md border-b border-[#2A2A2A]"
        style={{ backgroundColor: "rgba(18, 18, 18, 0.1)" }}
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/rapkology-logo.png"
              alt="Rapkology Logo"
              width={235}
              height={60}
              className="ml-4 md:ml-8 lg:ml-24 w-auto h-12 md:h-10 lg:h-[60px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8 xl:space-x-12 ml-8 md:ml-16 lg:ml-32 xl:ml-52 flex-1 justify-center lg:justify-start">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-rapkology-white text-xs md:text-sm font-medium hover:text-rapkology-yellow transition-colors tracking-wide whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side - Search, Login, and Mobile Menu */}
        <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ml-auto flex-shrink-0">
          {/* Search Icon - Hidden on mobile */}
          <button className="hidden md:block text-white hover:text-rapkology-yellow transition-colors cursor-pointer p-1">
            <Image
              src="/common/search.svg"
              alt="Search"
              width={24}
              height={22}
              className="w-5 h-4 md:w-6 md:h-5"
            />
          </button>

          {/* Login Button - Hidden on mobile */}
          <button
            className="hidden md:block bg-white text-black px-3 md:px-4 lg:px-6 py-1.5 md:py-2 text-xs md:text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
          >
            GİRİŞ YAP
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-rapkology-yellow transition-colors cursor-pointer p-1"
            aria-label="Toggle mobile menu"
          >
            <Image
              src="/common/header-menu.svg"
              alt="Menu"
              width={32}
              height={14}
              className="w-8 h-3.5"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-[#121212] border-l border-[#2A2A2A] transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
                <h2 className="text-rapkology-white font-semibold">MENÜ</h2>
                <button
                  onClick={closeMobileMenu}
                  className="text-white hover:text-rapkology-yellow transition-colors p-1"
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Items */}
               <nav className="flex-1 py-4">
                 {/* Search Option for Mobile */}
                 <button
                   onClick={closeMobileMenu}
                   className="w-full text-left px-4 py-3 text-rapkology-white text-sm font-medium hover:text-rapkology-yellow hover:bg-[#1A1A1A] transition-colors border-b border-[#2A2A2A] flex items-center space-x-3"
                 >
                   <Image
                     src="/common/search.svg"
                     alt="Search"
                     width={20}
                     height={18}
                     className="w-5 h-4"
                   />
                   <span>ARAMA</span>
                 </button>
                 
                 {navigationItems.map((item) => (
                   <Link
                     key={item.label}
                     href={item.href}
                     onClick={closeMobileMenu}
                     className="block px-4 py-3 text-rapkology-white text-sm font-medium hover:text-rapkology-yellow hover:bg-[#1A1A1A] transition-colors border-b border-[#2A2A2A] last:border-b-0"
                   >
                     {item.label}
                   </Link>
                 ))}
               </nav>

              {/* Mobile Menu Footer */}
              <div className="p-4 border-t border-[#2A2A2A]">
                <button
                  onClick={closeMobileMenu}
                  className="w-full bg-white text-black py-2 text-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  GİRİŞ YAP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
