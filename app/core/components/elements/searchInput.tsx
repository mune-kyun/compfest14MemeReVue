import { useState } from "react"

type SearchInputProps = {
  handleSubmit?: any
}

const SearchInput: React.FC<SearchInputProps> = ({ handleSubmit }) => {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)

  const borderColor = focused ? "border-[#6E7198]" : "border-[#60648B]"

  return (
    <div className={`flex rounded-lg border-solid border-2 ${borderColor}`}>
      <button className="bg-transparent" onClick={() => handleSubmit(value)}>
        <img className="px-[30px] py-[12px]" src="/search_icon.svg" alt="search" />
      </button>
      <input
        type="text"
        autoComplete="off"
        className="w-full focus:outline-none px-5 mr-2 bg-[#323347] placeholder:text-[#FFFFFF1A] text-[#FFFFFF]"
        name="search"
        placeholder="search..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
