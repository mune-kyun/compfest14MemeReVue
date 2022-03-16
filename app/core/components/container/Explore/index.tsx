import { useRef, useState } from "react"
import Card from "../../elements/card"
import styles from "./Explore.module.css"

import Masonry from "react-masonry-css"

type ExploreProps = {
  memes: any
  saveMeme: any
}

const Explore: React.FC<ExploreProps> = ({ memes, saveMeme }) => {
  const [memeValue, setMemeValue] = useState("")
  const searchRef = useRef(null)

  const handleSubmit = (event) => {
    const searchInput = searchRef.current
    if (searchInput == null) return
    // alert(searchInput["value"])
    setMemeValue(searchInput["value"])
  }

  if (memeValue.length != 0) memes = memes.filter((meme) => meme.title.includes(memeValue))

  return (
    <div className="bg-[#323347] max-w-[1000px] mt-[60px] w-full">
      <div className="text-[#FFFFFF] text-center">
        <h1 className="font-bold text-[4rem]">Meme ReVue</h1>
        <p className="font-medium text-[1rem]">(get it, cuz IT Dev, vuejs)</p>
      </div>
      <div className="flex">
        <input
          ref={searchRef}
          type="text"
          className="w-full"
          name="search"
          placeholder="search..."
        />
        <button onClick={handleSubmit}>searchs</button>
      </div>
      <div className="mt-[40px] w-full">
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
