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
        <div className={`${generalStyle} bg-[#5561FF] hover:bg-[#3643FC] ${additionalStyle}`}>
          {children}
        </div>
      </button>
    )
  } else if (buttonType == "dead") {
    return (
      <button className="hover:cursor-default">
        <div className={`${generalStyle} bg-[#505a66] ${additionalStyle}`}>{children}</div>
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
