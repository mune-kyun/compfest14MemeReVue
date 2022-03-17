type ButtonProps = {
  buttonType: any
  additionalStyle?: any
  handleClick?: any
}

const generalStyle = "rounded-lg"

const Button: React.FC<ButtonProps> = ({ buttonType, additionalStyle, handleClick, children }) => {
  if (buttonType == "active") {
    return (
      <button onClick={handleClick}>
        <div
          className={`${generalStyle} bg-gradient-to-b from-[#5561FF] to-[#3643FC] hover:bg-[#3643FC] ${additionalStyle}`}
        >
          {children}
        </div>
      </button>
    )
  } else if (buttonType == "dead") {
    return (
      <button className="hover:cursor-default">
        <div className={`${generalStyle} bg-[#53536f] ${additionalStyle}`}>{children}</div>
      </button>
    )
  }
  return (
    <button onClick={handleClick}>
      <div className={`${generalStyle} ${additionalStyle}`}>{children}</div>
    </button>
  )
}

export default Button
