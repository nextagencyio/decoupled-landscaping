
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalStatItem {
  id: string
  number?: string
  label?: string
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
export interface DrupalService {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  summary?: string
  priceRange?: string
  duration?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

export interface DrupalProject {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  clientName?: string
  location?: string
  projectType?: string
  completionDate?: { timestamp: string }
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  gallery?: string
}

export interface ProjectsData {
  nodeProjects: {
    nodes: DrupalProject[]
  }
}

export interface DrupalTestimonial {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  clientName?: string
  clientLocation?: string
  rating?: number
  serviceReceived?: string
  photo?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface TestimonialsData {
  nodeTestimonials: {
    nodes: DrupalTestimonial[]
  }
}
