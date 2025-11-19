'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-8">
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-primary" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your purchase. Your premium Lao tea is on its way.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 space-y-3 text-left">
          <div>
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="text-lg font-semibold text-card-foreground">
              #{Math.random().toString(36).substring(7).toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Estimated Delivery</p>
            <p className="text-lg font-semibold text-card-foreground">5-7 business days</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            href="/products"
            className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:bg-primary transition-colors text-center"
          >
            Return Home
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          A confirmation email has been sent to your inbox
        </p>
      </div>
    </div>
  )
}
