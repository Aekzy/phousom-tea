'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'

export function CartButton() {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <Link href="/cart" className="relative text-foreground hover:text-primary transition">
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
