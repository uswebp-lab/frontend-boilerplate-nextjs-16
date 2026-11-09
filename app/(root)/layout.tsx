

/** Storefront layout: top bar, sticky header, newsletter band and footer. */
export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <TopBar />
      <SiteHeader /> */}
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </>
  )
}
