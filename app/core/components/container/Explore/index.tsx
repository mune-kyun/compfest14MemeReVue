import { useState } from "react"
import Card from "../../elements/card"
import styles from "./Explore.module.css"

import Masonry from "react-masonry-css"
import SearchInput from "../../elements/searchInput"

type ExploreProps = {
  memes: any
  saveMeme: any
}

const Explore: React.FC<ExploreProps> = ({ memes, saveMeme }) => {
  const [memeValue, setMemeValue] = useState("")

  const handleSubmit = (value) => {
    setMemeValue(value)
  }

  if (memeValue.length != 0) memes = memes.filter((meme) => meme.title.includes(memeValue))

  return (
    <div className="bg-[#323347] max-w-[1000px] mt-[32px] w-full">
      <div className="mt-[32px] mx-5">
        <p className="mb-[4px] font-medium text-base text-[#FFFFFF]">Search for a meme</p>
        <SearchInput handleSubmit={handleSubmit} />
      </div>
      <div className="mt-[40px] w-full flex justify-center">
        <Masonry
          breakpointCols={3}
          className={styles.mymasonrygrid}
          columnClassName={styles.mymasonrygridcolumn}
        >
          {memes?.map((meme) => (
            <Card key={meme.id} meme={meme} saveClick={() => saveMeme(meme.id)} />
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default Explore
