'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Leaf, Sun, Droplets, Ruler, Flower2, TreePine } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const serviceItems = [
  { icon: Leaf, label: 'Garden Design', description: 'Custom landscape plans' },
  { icon: Sun, label: 'Outdoor Living', description: 'Patios & pergolas' },
  { icon: Droplets, label: 'Irrigation', description: 'Smart water systems' },
  { icon: Ruler, label: 'Hardscaping', description: 'Walls & walkways' },
  { icon: Flower2, label: 'Planting', description: 'Trees, shrubs & flowers' },
  { icon: TreePine, label: 'Maintenance', description: 'Year-round care' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80&fit=crop', alt: 'Beautiful garden landscape design' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop', alt: 'Stone patio with garden furniture' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&fit=crop', alt: 'Lush garden pathway' },
  { src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80&fit=crop', alt: 'Professional lawn maintenance' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">From concept to completion, we handle every aspect of your outdoor transformation.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceItems.map((item) => (
              <div key={item.label} className="text-center group">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors duration-300 border-2 border-primary-100">
                  <item.icon className="w-9 h-9 text-primary-600" />
                </div>
                <h3 className="font-semibold text-primary-900 text-sm mb-1">{item.label}</h3>
                <p className="text-gray-500 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">Recent Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">A glimpse at some of our recent landscape transformations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm">
                <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="relative bg-primary-950 text-white pt-20 pb-12">
        <svg className="absolute -top-1 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z" className="fill-stone-50" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center"><Leaf className="w-5 h-5 text-accent-300" /></div>
                <h3 className="text-2xl font-display font-bold text-white">Greenscape Design Co.</h3>
              </div>
              <p className="text-primary-200 mb-6 max-w-md leading-relaxed">Award-winning landscape design and installation. We transform outdoor spaces into living works of art.</p>
              <div className="flex gap-3">
                <span className="inline-flex items-center bg-primary-900 rounded-full px-3 py-1 text-xs text-primary-200"><Leaf className="w-3 h-3 mr-1" /> Licensed & Insured</span>
                <span className="inline-flex items-center bg-primary-900 rounded-full px-3 py-1 text-xs text-primary-200"><Sun className="w-3 h-3 mr-1" /> 20+ Years</span>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-lg">Visit Us</h4>
              <ul className="space-y-3 text-primary-200 text-sm">
                <li>3200 Garden Way</li>
                <li>Portland, OR 97201</li>
                <li className="pt-2 font-semibold text-accent-300">Office Hours</li>
                <li>Mon - Fri: 8am - 5pm</li>
                <li>Sat: By Appointment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-primary-200 text-sm">
                <li><a href="/services" className="hover:text-accent-300 transition-colors">Services</a></li>
                <li><a href="/projects" className="hover:text-accent-300 transition-colors">Projects</a></li>
                <li><a href="/testimonials" className="hover:text-accent-300 transition-colors">Testimonials</a></li>
                <li><a href="/about" className="hover:text-accent-300 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-accent-300 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Greenscape Design Co. All rights reserved.</p>
            <p className="text-primary-400 text-xs">Crafting landscapes, cultivating beauty</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
