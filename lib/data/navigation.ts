import type { NavGroup, NavLink, SocialLink } from "@/types"

export const topBarLinks: NavLink[] = [
  { label: "Affiliate Disclosure", href: "#affiliate-disclosure" },
  { label: "Marketplaces", href: "#marketplaces" },
  { label: "B2B & B2C Solutions", href: "#wholesale" },
]

export const mainNavLinks: NavLink[] = [
  { label: "B2C Shopping", href: "#trending" },
  { label: "B2B Wholesale", href: "#wholesale" },
  { label: "Amazon", href: "#marketplaces" },
  { label: "Walmart", href: "#marketplaces" },
  { label: "Alibaba", href: "#marketplaces" },
  { label: "AliExpress", href: "#marketplaces" },
  { label: "Deals", href: "#deals" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export const footerNavGroups: NavGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Shop by Category", href: "#categories" },
      { label: "B2C Shopping", href: "#trending" },
      { label: "B2B Wholesale", href: "#wholesale" },
      { label: "Deals", href: "#deals" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Marketplaces",
    links: [
      { label: "Amazon", href: "#marketplaces" },
      { label: "Walmart", href: "#marketplaces" },
      { label: "Alibaba", href: "#marketplaces" },
      { label: "AliExpress", href: "#marketplaces" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "Affiliate Disclosure", href: "#affiliate-disclosure" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
]

/** Crops of /images/brand/social-icons.png, measured in Figma. */
export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com", sprite: { width: 23, height: 40, left: -1.19, spriteWidth: 528.57 } },
  { label: "X", href: "https://x.com", sprite: { width: 22, height: 40, left: -103.57, spriteWidth: 528.57 } },
  { label: "Instagram", href: "https://instagram.com", sprite: { width: 19, height: 39, left: -261.43, spriteWidth: 634.29 } },
  { label: "YouTube", href: "https://youtube.com", sprite: { width: 22, height: 39, left: -336.25, spriteWidth: 555 } },
  { label: "Pinterest", href: "https://pinterest.com", sprite: { width: 17, height: 40, left: -570.31, spriteWidth: 693.75 } },
]
