import { useState } from "react"
import Card from "../../elements/card"
import styles from "../Masonry.module.css"

import Masonry from "react-masonry-css"
import SearchInput from "../../elements/searchInput"

type SavedProps = {
  memes: any
}

const Saved: React.FC<SavedProps> = ({ memes }) => {
  const [memeValue, setMemeValue] = useState("")

  const handleSubmit = (value) => {
    setMemeValue(value)
  }

  if (memeValue.length != 0) memes = memes.filter((meme) => meme.title.includes(memeValue))

  if (memes.length == 0)
    return (
      <div className="bg-[#323347] max-w-[1000px] mt-[32px] w-full">
        <img className="w-full h-auto" src="/empty_meme_state.svg" alt="empty" />
      </div>
    )

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
            <Card key={meme.id} meme={meme} saveClick={() => {}} />
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default Saved
