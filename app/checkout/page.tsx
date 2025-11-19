'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { loadStripe } from '@stripe/js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const { items, getTotalPrice, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  })

  const subtotal = getTotalPrice()
  const shipping = subtotal > 0 ? 10 : 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setLoading(true)
    setError(null)

    try {
      const { token } = await stripe.createToken(elements.getElement(CardElement)!)

      if (!token) {
        setError('Failed to create payment token')
        setLoading(false)
        return
      }

      // In a real app, you'd send this to your backend to create a charge
      // For now, we'll simulate a successful payment
      console.log('[v0] Processing payment with token:', token.id)

      // Simulate successful payment
      await new Promise(resolve => setTimeout(resolve, 2000))

      clearCart()
      window.location.href = '/checkout/success'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Shipping Information */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-bold text-card-foreground">Shipping Information</h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-bold text-card-foreground">Payment Information</h2>

        <div className="p-4 bg-background border border-border rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: 'hsl(var(--foreground))',
                  '::placeholder': {
                    color: 'hsl(var(--muted-foreground))',
                  },
                },
              },
            }}
          />
        </div>

        {error && (
          <div className="p-4 bg-destructive/10 border border-destructive rounded-lg text-destructive">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !stripe}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Your payment information is secure and encrypted
        </p>
      </div>
    </form>
  )
}

export default function CheckoutPage() {
  const { items } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/cart" className="flex items-center gap-2 text-primary hover:text-secondary transition mb-8">
            <ChevronLeft className="w-4 h-4" />
            Back to Cart
          </Link>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some tea before checking out</p>
            <Link
              href="/products"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 10 : 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/cart" className="flex items-center gap-2 text-primary hover:text-secondary transition mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Cart
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Checkout</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24 space-y-6">
              <h2 className="text-xl font-bold text-card-foreground">Order Summary</h2>

              <div className="space-y-3 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-semibold text-card-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3 text-sm">
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
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-card-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
