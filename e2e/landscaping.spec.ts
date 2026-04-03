import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with CMS content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Transform Your Outdoor Space')
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    // Stats from Drupal: 25+, 3,200+, 1,800+, 14
    await expect(page.getByText('25+')).toBeVisible()
    await expect(page.getByText('Years of Experience')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Ready to Transform Your Property?')).toBeVisible()
  })
})

test.describe('Services', () => {
  test('lists all services', async ({ page }) => {
    await page.goto('/services')
    await expect(page.getByText('Landscape Design').first()).toBeVisible()
    await expect(page.getByText('Hardscaping & Stonework').first()).toBeVisible()
    await expect(page.getByText('Lawn Care & Maintenance').first()).toBeVisible()
    await expect(page.getByText('Irrigation Systems').first()).toBeVisible()
  })

  test('service detail page loads', async ({ page }) => {
    await page.goto('/services/landscape-design')
    await expect(page.locator('h1')).toContainText('Landscape Design')
  })
})

test.describe('Projects', () => {
  test('lists all projects', async ({ page }) => {
    await page.goto('/projects')
    await expect(page.getByText('Willow Creek Estate Garden')).toBeVisible()
    await expect(page.getByText('Skyline Rooftop Garden')).toBeVisible()
    await expect(page.getByText('Cedar Ridge Pool Landscape')).toBeVisible()
  })

  test('project detail page loads', async ({ page }) => {
    await page.goto('/projects/willow-creek-estate')
    await expect(page.locator('h1')).toContainText('Willow Creek Estate Garden')
  })
})

test.describe('Testimonials', () => {
  test('lists all testimonials', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.getByText('A Backyard We Actually Use Now')).toBeVisible()
    await expect(page.getByText('Professional From Start to Finish')).toBeVisible()
    await expect(page.getByText('Our Lawn Has Never Looked Better')).toBeVisible()
  })

  test('testimonial detail page loads', async ({ page }) => {
    await page.goto('/testimonials/johnson-family')
    await expect(page.locator('h1')).toContainText('A Backyard We Actually Use Now')
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Evergreen Landscapes')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Contact Us')
  })
})

test.describe('Navigation', () => {
  test('header nav links work', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Services' }).first().click()
    await expect(page).toHaveURL(/\/services/)
    await page.getByRole('link', { name: 'Projects' }).first().click()
    await expect(page).toHaveURL(/\/projects/)
  })
})
