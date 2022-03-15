import { useState } from "react"
import Card from "../../elements/card"

type ExploreProps = {
  memes: any
  saveMeme: any
}

const Explore: React.FC<ExploreProps> = ({ memes, saveMeme }) => {
  const [value, setValue] = useState("")

  const handleSubmit = (event) => {
    alert(value)
  }

  // memes = memes.filter((meme) => meme.title.includes(value))

  return (
    <div className="bg-[#323347] max-w-[1000px] mt-[60px]">
      <div className="text-[#FFFFFF] text-center">
        <h1 className="font-bold text-[4rem]">Meme ReVue</h1>
        <p className="font-medium text-[1rem]">(get it, cuz IT Dev, vuejs)</p>
      </div>
      <div className="flex">
        <input type="text" className="w-full" name="search" placeholder="search..." />
        <button onClick={handleSubmit}>searchs</button>
      </div>
      <div className="mt-[40px]">
        {memes?.map((meme) => (
          <Card key={meme.id} meme={meme} saveClick={() => saveMeme(meme.id)} />
        ))}
      </div>
    </div>
  )
}

export default Explore
