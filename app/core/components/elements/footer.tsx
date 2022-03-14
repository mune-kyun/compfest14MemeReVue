import { BlitzComponentType, Image } from "blitz"

const Footer: BlitzComponentType = () => {
  return (
    <div className="bg-[#323347] px-5 flex justify-between">
      <Image width={300} height={150} src="/compfest_logo_footer.svg" alt="home" />
      <div className="flex items-center">
        <div className="flex p-5 gap-x-5">
          <a target="_blank" rel="noreferrer" href="https://facebook.com">
            <Image width={30} height={30} src="/faceboook-circle.svg" alt="facebook" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com">
            <Image width={30} height={30} src="/twitter.svg" alt="twitter" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://youtube.com">
            <Image width={30} height={30} src="/youtube.svg" alt="youtube" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://instagram.com">
            <Image width={30} height={30} src="/instagram.svg" alt="instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com">
            <Image width={30} height={30} src="/linkedin.svg" alt="linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://line.com">
            <Image width={30} height={30} src="/line.svg" alt="line" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://medium.com">
            <Image width={30} height={30} src="/medium.svg" alt="medium" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
