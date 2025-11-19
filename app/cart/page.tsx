'use client'

import Link from 'next/link'
import { Trash2, ChevronLeft, Plus, Minus } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart()

  const subtotal = getTotalPrice()
  const shipping = subtotal > 0 ? 10 : 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="flex items-center gap-2 text-primary hover:text-secondary transition mb-4">
            <ChevronLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Explore our collection to find your perfect tea</p>
            <Link
              href="/products"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="bg-card border border-border rounded-lg p-6 flex gap-6"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-accent/30 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 text-4xl">
                      {item.image}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-card-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-primary font-semibold mb-4">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity Control */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-muted rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-muted rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Total and Remove */}
                    <div className="text-right flex flex-col justify-between">
                      <p className="text-2xl font-bold text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:bg-destructive/10 p-2 rounded transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24 space-y-6">
                <h2 className="text-xl font-bold text-card-foreground">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold text-card-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold text-card-foreground">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-semibold text-card-foreground">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between mb-6">
                    <span className="text-lg font-bold text-card-foreground">Total</span>
                    <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                  </div>

                  <Link
                    href="/checkout"
                    className="block w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-center hover:bg-secondary transition-colors"
                  >
                    Proceed to Checkout
                  </Link>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Free shipping on orders over $100
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
