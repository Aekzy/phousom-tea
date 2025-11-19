'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { CartButton } from '@/components/cart-button'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary">
                PHOUSOM
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-foreground hover:text-primary transition">
                Shop
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition">
                Our Story
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition">
                Contact
              </Link>
              <CartButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <Link href="/products" className="block py-2 text-foreground hover:text-primary">
                Shop
              </Link>
              <Link href="/about" className="block py-2 text-foreground hover:text-primary">
                Our Story
              </Link>
              <Link href="/contact" className="block py-2 text-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-primary font-semibold text-sm tracking-wide uppercase">
                  Heritage Crafted
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                  Discover Authentic Lao Tea
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Experience the finest artisanal tea crafted by Lao people, celebrating generations of heritage and natural ingredients from the heart of Southeast Asia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-md h-96">
                {/* Placeholder for tea product image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl" />
                <div className="absolute inset-4 bg-white/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🍃</div>
                    <p className="text-foreground font-semibold">Premium Tea Blends</p>
                    <p className="text-sm text-muted-foreground">Handcrafted with care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase">
              Featured Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Our Best-Selling Blends
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-accent/30 to-secondary/20 flex items-center justify-center">
                  <div className="text-5xl">🍵</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-card-foreground">Premium Blend {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    Authentic Lao tea with natural herbs and botanicals
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-primary">150,000₭</span>
                    <Link href="/products" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-semibold">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">PHOUSOM</h3>
              <p className="text-sm opacity-80">
                Authentic artisanal tea crafted by Lao people
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="/products">All Products</Link></li>
                <li><Link href="/products">Tea Blends</Link></li>
                <li><Link href="/products">Gift Sets</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="#" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="#" rel="noopener noreferrer">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2025 Lao Heritage Tea. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
