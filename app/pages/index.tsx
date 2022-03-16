import Explore from "app/core/components/container/Explore"
import { useMeme } from "app/core/hooks/useMeme"
import { BlitzPage, Image } from "blitz"

const Home: BlitzPage = () => {
  const { memes, saveMeme, deleteMeme } = useMeme()

  return (
    <div className="flex justify-center pb-[80px] px-5">
      <Explore memes={memes} saveMeme={saveMeme} />
      {/* <pre>{JSON.stringify(memes, null, 2)}</pre> */}
    </div>
  )
}

export default Home
