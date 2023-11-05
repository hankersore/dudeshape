import './Button.css'

function Button(props) {
  const {name, backgroundColor, textColor} = props
  return (
    <button className='btn' style={{backgroundColor: backgroundColor, color: textColor}}>
      {name}
    </button>
  )
}

export default Button