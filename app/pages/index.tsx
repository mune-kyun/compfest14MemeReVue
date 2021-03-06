import Explore from "app/core/components/container/Explore"
import Saved from "app/core/components/container/Saved"
import PageTab from "app/core/components/elements/pageTab"
import { useMeme } from "app/core/hooks/useMeme"
import { BlitzPage, Image } from "blitz"
import { useState } from "react"

const EXPLORE_PAGE = 0
const SAVED_PAGE = 1

const Home: BlitzPage = () => {
  const { memes, saveMeme, deleteMeme } = useMeme()
  const [page, setPage] = useState(0)

  return (
    <div className="flex justify-center pb-[80px] px-5">
      <div className="flex flex-col items-center">
        <PageTab
          pageList={pageList}
          pageIndex={page}
          setPage={setPage}
          additionalStyle="mt-[40px]"
        />
        <div className="text-[#FFFFFF] text-center mt-[60px] ">
          <h1 className="font-bold text-[4rem]">Meme ReVue</h1>
          <p className="font-medium text-[1rem]">(get it, cuz IT Dev, vuejs)</p>
        </div>
        {page == EXPLORE_PAGE ? (
          <Explore memes={memes} saveMeme={saveMeme} />
        ) : (
          <Saved memes={memes.filter((meme) => meme.saved)} />
        )}
        {/* <pre>{JSON.stringify(memes, null, 2)}</pre> */}
      </div>
    </div>
  )
}

const pageList = [
  { src: "/explore_icon.svg", title: "Explore" },
  { src: "/saved_icon.svg", title: "Saved" },
]

export default Home
