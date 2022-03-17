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
    href: "https://www.facebook.com/COMPFEST/",
    src: "/faceboook-circle.svg",
    alt: "facebook",
  },
  {
    href: "https://twitter.com/compfest",
    src: "/twitter.svg",
    alt: "twitter",
  },
  {
    href: "https://www.youtube.com/channel/UC03QmhwvQEWVI608A-RCEpw",
    src: "/youtube.svg",
    alt: "youtube",
  },
  {
    href: "https://www.instagram.com/compfest/?hl=en",
    src: "/instagram.svg",
    alt: "instagram",
  },
  {
    href: "https://www.linkedin.com/company/compfest",
    src: "/linkedin.svg",
    alt: "linkedin",
  },
  {
    href: "https://line.me/R/ti/p/%40compfest",
    src: "/line.svg",
    alt: "line",
  },
  {
    href: "https://medium.com/compfest",
    src: "/medium.svg",
    alt: "medium",
  },
]

export default Footer
