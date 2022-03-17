import Button from "./button"

type PageTabProps = {
  pageList: any
  pageIndex: any
  setPage: any
  additionalStyle?: String
}

const PageTab: React.FC<PageTabProps> = ({ pageList, pageIndex, setPage, additionalStyle }) => {
  return (
    <div
      className={`${additionalStyle} w-fit rounded-lg bg-[#1d1e2b] text-[#FFFFFF] flex justify-center`}
    >
      {pageList.map((page, index) => {
        const generalButtonStyle = "py-[12px] px-[100px]"
        const additionalButtonStyle = index == pageIndex ? "bg-[#5561FF]" : "bg-[#242538]"

        return (
          <Button
            key={index}
            buttonType="custom"
            handleClick={() => setPage(index)}
            additionalStyle={`${generalButtonStyle} ${additionalButtonStyle}`}
          >
            <div className="flex justify-center">
              <img className="w-[10px] h-auto" src={page.src} alt="tab" />
              <p className="font-semibold text-base ml-[10px]">{page.title}</p>
            </div>
          </Button>
        )
      })}
    </div>
  )
}

export default PageTab
