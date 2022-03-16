import { BlitzComponentType, Image } from "blitz"

const Footer: BlitzComponentType = () => {
  return (
    <div className="bg-[#2D2F45] px-20 flex justify-between">
      <Image width={300} height={150} src="/compfest_logo_footer.svg" alt="home" />
      <div className="flex items-center">
        <div className="flex p-5 gap-x-5">
          {data.map((datum) => {
            return (
              <a key={datum.alt} target="_blank" rel="noreferrer" href={datum.href}>
                <Image width={20} height={20} src={datum.src} alt={datum.alt} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    href: "https://facebook.com",
    src: "/faceboook-circle.svg",
    alt: "facebook",
  },
  {
    href: "https://twitter.com",
    src: "/twitter.svg",
    alt: "twitter",
  },
  {
    href: "https://youtube.com",
    src: "/youtube.svg",
    alt: "youtube",
  },
  {
    href: "https://instagram.com",
    src: "/instagram.svg",
    alt: "instagram",
  },
  {
    href: "https://linkedin.com",
    src: "/linkedin.svg",
    alt: "linkedin",
  },
  {
    href: "https://line.com",
    src: "/line.svg",
    alt: "line",
  },
  {
    href: "https://medium.com",
    src: "/medium.svg",
    alt: "medium",
  },
]

export default Footer
