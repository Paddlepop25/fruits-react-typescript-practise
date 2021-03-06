import React, { CSSProperties, MouseEvent, useState } from 'react'
import './App.css'

// text are props passed from App.tsx to components
type Props = {
  text: string
}

// type and interface almost the same with few differences. read up
// interface Props {
//   text: string
// }

// see <Button ... /> sends 3 props to the Button component
interface ButtonProps {
  style: CSSProperties // this type is for style
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void // it's a mouse event only valid on button element, it returns nothing
  text: string
}

// 3 fruit components, 3 ways of declaring types
// declare function with React.FC (React.FunctionComponent)
const Banana: React.FC<{ text: string }> = ({ text, children }) => (
  <div>
    {text}, {children}
  </div>
)
const Strawberry: React.FC<Props> = ({ text }) => <div>{text}</div>
const Apple = ({ text }: Props) => <div>{text}</div>

// button component to increase count
const Button: React.FC<ButtonProps> = ({ text, callback }) => (
  <button name='increaseButton' onClick={callback}>
    {text}
  </button>
)

// our App
function App() {
  const [count, setCount] = useState(0)

  // can write like React.MouseEvent or import on top of it to omit the 'React.'
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget)
    setCount((prev) => prev + 1)
  }

  return (
    <div className='App'>
      <h1>Really quick crash course</h1>
      <h2>in Typescript with React</h2>
      <Banana text='🍌Banana'>More Bananas🍌🍌🍌</Banana>
      <Strawberry text='🍓Strawberry' />
      <Apple text='🍏Apple' />
      <Button
        style={{ background: 'red', margin: '200px 0' }}
        callback={handleClick}
        text='Click me!'
      />
      <p>{count}</p>
    </div>
  )
}

export default App
