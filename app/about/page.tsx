import Link from 'next/link'
import { ChevronLeft, Mail, MapPin, Phone } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-secondary transition mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back Home
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Our Story</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Story Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">About Our Lao Tea</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are passionate about bringing the authentic taste of Laos to tea lovers around the world. 
            Our teas are carefully sourced from the misty mountains of northern Laos, where generations 
            of local families have perfected the art of tea cultivation and processing.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each blend is crafted with respect for traditional methods, preserving the natural flavors 
            and health benefits that make Lao tea truly special. We work directly with local farmers 
            to ensure fair practices and the highest quality tea leaves.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-card border border-border rounded-lg p-8 space-y-4">
          <h3 className="text-2xl font-bold text-card-foreground">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To celebrate and share the rich tea heritage of Laos while supporting local communities 
            and promoting sustainable farming practices. We believe that every cup of tea tells a story 
            of tradition, culture, and human connection.
          </p>
        </section>

        {/* Values Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <h4 className="text-xl font-bold text-card-foreground">Quality</h4>
            <p className="text-muted-foreground text-sm">
              Premium teas selected for their purity, flavor, and health benefits
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <h4 className="text-xl font-bold text-card-foreground">Authenticity</h4>
            <p className="text-muted-foreground text-sm">
              Genuine Lao tea using traditional cultivation and processing methods
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <h4 className="text-xl font-bold text-card-foreground">Sustainability</h4>
            <p className="text-muted-foreground text-sm">
              Fair trade practices and environmentally responsible sourcing
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a href="mailto:hello@laotea.com" className="text-primary hover:text-secondary transition">
                  hello@laotea.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <a href="tel:+85620123456" className="text-primary hover:text-secondary transition">
                  +856 20 123 456
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Luang Prabang, Laos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-lg p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Ready to Discover Authentic Lao Tea?</h3>
          <p className="text-muted-foreground">
            Explore our collection and experience the taste of tradition
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Shop Now
          </Link>
        </section>
      </div>
    </div>
  )
}
