export const siteConfig = {
  name: "ANACAONA",
  tagline: "Flor de Oro",
  /** Large label shown after the logo in the footer. */
  footerLabel: "Marketplace",
  title: "ANACAONA — Discover Global Products, Inspired by Dominican Heritage",
  description:
    "A global affiliate marketplace connecting you to millions of products from Amazon, Walmart, Alibaba, AliExpress and more.",
  copyright: "© 2026 ANACAONA. All Rights Reserved.",
  credit: "Designed & Developed by US Web Professionals",
  developer: {
    name: "Saleem Raza",
    email: "sr.saleem774@gmail.com",
    linkedin: "https://www.linkedin.com/in/saleem-raza",
    linkedinHandle: "in/saleem-raza",
  },
} as const

/** Shared brand imagery that is cropped from a larger source in the design. */
export const brandAssets = {
  logo: {
    src: "/images/brand/logo-source.jpg",
    width: 1536,
    height: 1024,
    // Crop of the source image inside the 215×67 logo box (Figma values).
    crop: { width: "176.35%", height: "376.47%", left: "-35.48%", top: "-123.9%" },
  },
  socialSprite: {
    src: "/images/brand/social-icons.png",
    width: 2172,
    height: 724,
  },
} as const
