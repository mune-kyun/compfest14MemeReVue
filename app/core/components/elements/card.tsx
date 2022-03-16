import Button from "./button"

type CardProps = {
  meme: any
  saveClick?: any
}

const Card: React.FC<CardProps> = ({ meme, saveClick }) => {
  const generalAdditionalStyle = "mt-[32px] py-[12px] px-[32px]"

  return (
    <div className="rounded-lg bg-[#323347] text-[#FFFFFF]">
      <img className="rounded-t-2xl w-full h-auto" src={meme.imageSrc} alt={meme.title} />
      <div className="rounded-2xl bg-[#3E405B] p-5 relative bottom-5">
        <p className="font-bold text-[1.5rem]">{meme.title}</p>
        {!meme.saved ? (
          <Button
            buttonType="active"
            handleClick={saveClick}
            additionalStyle={generalAdditionalStyle}
          >
            {ButtonContent("./bookmark_add_icon.svg", "Save")}
          </Button>
        ) : (
          <Button buttonType="dead" additionalStyle={generalAdditionalStyle}>
            {ButtonContent("./bookmark_saved_icon.svg", "Saved")}
          </Button>
        )}
      </div>
    </div>
  )
}

const ButtonContent = (imgSrc, text) => {
  return (
    <div className="flex">
      <img src={imgSrc} alt="icon" />
      <p className="ml-[12px] font-semibold text-base">{text}</p>
    </div>
  )
}

export default Card
