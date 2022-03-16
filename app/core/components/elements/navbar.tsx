import { BlitzComponentType, Image, Link } from "blitz"

const Navbar: BlitzComponentType = () => {
  const src = "/CompfestLogo.svg"

  return (
    <div className="bg-[#323347] flex justify-center">
      <a href="/">
        <Image width={200} height={50} src={src} alt={"home"} />
      </a>
    </div>
  )
}

export default Navbar
