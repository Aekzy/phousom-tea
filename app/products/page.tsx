'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Filter, ChevronDown } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Green Jasmine Blend',
    category: 'Green Tea',
    price: 24.99,
    image: '🍃',
    description: 'Delicate green tea infused with jasmine flowers'
  },
  {
    id: 2,
    name: 'Herbal Mint Mix',
    category: 'Herbal',
    price: 19.99,
    image: '🌿',
    description: 'Fresh mint leaves with traditional Lao herbs'
  },
  {
    id: 3,
    name: 'Golden Oolong',
    category: 'Oolong',
    price: 32.99,
    image: '🍯',
    description: 'Roasted oolong with honey notes'
  },
  {
    id: 4,
    name: 'Black Tea Premium',
    category: 'Black Tea',
    price: 28.99,
    image: '🍵',
    description: 'Full-bodied black tea from Lao highlands'
  },
  {
    id: 5,
    name: 'Lemongrass Wellness',
    category: 'Herbal',
    price: 18.99,
    image: '🌾',
    description: 'Soothing lemongrass and ginger blend'
  },
  {
    id: 6,
    name: 'White Tea Delicate',
    category: 'White Tea',
    price: 34.99,
    image: '🤍',
    description: 'Rare white tea with natural sweetness'
  }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sortBy, setSortBy] = useState<string>('name')

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Our Tea Collection
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore our curated selection of authentic Lao tea blends
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 sticky top-24">
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-card-foreground mb-4">
                  <Filter className="w-5 h-5" />
                  Filter
                </h3>

                {/* Category Filter */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Category
                  </p>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground font-semibold'
                            : 'text-card-foreground hover:bg-muted'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sort Dropdown */}
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  Sort By
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedProducts.map(product => (
                  <div
                    key={product.id}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square bg-gradient-to-br from-accent/30 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                      {product.image}
                    </div>
                    <div className="p-6 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                          {product.category}
                        </p>
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-2xl font-bold text-primary">
                          ${product.price.toFixed(2)}
                        </span>
                        <Link
                          href={`/products/${product.id}`}
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-semibold flex items-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
