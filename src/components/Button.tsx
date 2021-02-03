import { CSSProperties, MouseEvent } from 'react'

interface Props {
  style: CSSProperties
  callback: (event: MouseEvent<HTMLButtonElement>) => void
  text: string
}

// button to increase count
const Button: React.FC<Props> = ({ text, callback }) => (
  <button name='increaseButton' onClick={callback}>
    {text}
  </button>
)

export default Button
