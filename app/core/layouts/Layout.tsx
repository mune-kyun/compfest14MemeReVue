import { Head, BlitzLayout } from "blitz"
import Footer from "../components/elements/footer"
import Navbar from "../components/elements/navbar"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "oprec-staff"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bg-[#323347]">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
