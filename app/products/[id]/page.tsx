'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ShoppingCart, Heart, Share2 } from 'lucide-react'
import { useParams } from 'next/navigation'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
  fullDescription: string
  rating: number
  reviews: number
  inStock: boolean
  servingsPerPackage: number
  brewTime: string
  temperature: string
  benefits: string[]
  ingredients: string[]
}

const products: Record<number, Product> = {
  1: {
    id: 1,
    name: 'Green Jasmine Blend',
    category: 'Green Tea',
    price: 24.99,
    image: '🍃',
    description: 'Delicate green tea infused with jasmine flowers',
    fullDescription: 'Our signature Green Jasmine Blend combines premium Lao green tea leaves with hand-picked jasmine flowers. This delicate infusion offers a subtle floral aroma and a light, refreshing taste that embodies the essence of Southeast Asian tea culture.',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    servingsPerPackage: 30,
    brewTime: '3-5 minutes',
    temperature: '160-180°F',
    benefits: [
      'Rich in antioxidants',
      'Promotes relaxation',
      'Supports metabolism',
      'Natural energy boost'
    ],
    ingredients: [
      'Green tea leaves',
      'Jasmine flowers',
      'Natural jasmine flavoring'
    ]
  },
  2: {
    id: 2,
    name: 'Herbal Mint Mix',
    category: 'Herbal',
    price: 19.99,
    image: '🌿',
    description: 'Fresh mint leaves with traditional Lao herbs',
    fullDescription: 'A refreshing herbal blend featuring fresh peppermint combined with traditional Lao medicinal herbs. Perfect for digestion and relaxation, this blend captures the essence of traditional Southeast Asian herbal remedies.',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    servingsPerPackage: 25,
    brewTime: '5-7 minutes',
    temperature: '200-212°F',
    benefits: [
      'Aids digestion',
      'Soothes stomach',
      'Refreshing flavor',
      'Natural energy'
    ],
    ingredients: [
      'Peppermint leaves',
      'Lemongrass',
      'Ginger',
      'Traditional Lao herbs'
    ]
  },
  3: {
    id: 3,
    name: 'Golden Oolong',
    category: 'Oolong',
    price: 32.99,
    image: '🍯',
    description: 'Roasted oolong with honey notes',
    fullDescription: 'Our premium Golden Oolong is carefully roasted to bring out natural honey and caramel notes. This semi-oxidized tea offers a complex flavor profile that tea connoisseurs will appreciate.',
    rating: 4.9,
    reviews: 203,
    inStock: true,
    servingsPerPackage: 35,
    brewTime: '3-5 minutes',
    temperature: '195-205°F',
    benefits: [
      'Metabolism support',
      'Heart health',
      'Rich flavor profile',
      'Long-lasting taste'
    ],
    ingredients: [
      'Premium oolong leaves',
      'Natural honey flavoring',
      'Caramel notes'
    ]
  }
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  const product = products[productId]

  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product not found</h1>
          <Link href="/products" className="text-primary hover:text-secondary transition">
            Back to products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/products" className="flex items-center gap-2 text-primary hover:text-secondary transition">
            <ChevronLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-accent/30 to-secondary/20 rounded-2xl flex items-center justify-center text-9xl">
              {product.image}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-foreground">{product.rating}</span>
                  <span className="text-yellow-500">★</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {product.description}
              </p>
            </div>

            {/* Price and Stock */}
            <div className="border-y border-border py-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-primary">${product.price.toFixed(2)}</span>
                {product.inStock && (
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-semibold">
                    In Stock
                  </span>
                )}
              </div>
              <p className="text-muted-foreground">
                {product.servingsPerPackage} servings per package
              </p>
            </div>

            {/* Brewing Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Brew Time</p>
                <p className="font-semibold text-foreground">{product.brewTime}</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Water Temperature</p>
                <p className="font-semibold text-foreground">{product.temperature}</p>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-semibold text-foreground">Quantity:</label>
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 px-2 py-2 text-center border-l border-r border-border bg-background focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    addedToCart
                      ? 'bg-green-600 text-white'
                      : 'bg-primary text-primary-foreground hover:bg-secondary'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                </button>
                <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-muted transition-colors font-semibold flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Share */}
            <button className="flex items-center gap-2 text-primary hover:text-secondary transition font-semibold">
              <Share2 className="w-5 h-5" />
              Share this product
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-12 border-t border-border">
          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Health Benefits</h2>
            <ul className="space-y-3">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">✓</span>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingredients */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Ingredients</h2>
            <ul className="space-y-3">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">About This Tea</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {product.fullDescription}
          </p>
        </div>
      </div>
    </div>
  )
}
