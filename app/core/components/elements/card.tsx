type CardProps = {
  meme: any
  saveClick?: any
}

const Card: React.FC<CardProps> = ({ meme, saveClick }) => {
  return (
    <div className="rounded-lg bg-[#323347] text-[#FFFFFF]">
      <img className="rounded-t-lg w-full h-auto" src={meme.imageSrc} alt={meme.title} />
      <div className="rounded-t-lg bg-[#3E405B] p-5 relative bottom-5">
        <p className="font-bold text-[1.5rem]">{meme.title}</p>
        <p>{meme.saved ? "saved" : "not saved"}</p>
        <button onClick={saveClick}>save</button>
      </div>
    </div>
  )
}

export default Card
