/** Main site layout: wraps public pages with the site chrome. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex-1">{children}</main>
}
