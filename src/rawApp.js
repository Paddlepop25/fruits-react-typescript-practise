import React, { useState } from 'react'
import './App.css'

// 3 fruit components
const Banana = ({ text, children }) => (
  <div>
    {text}, {children}
  </div>
)
const Strawberry = ({ text }) => <div>{text}</div>
const Apple = ({ text }) => <div>{text}</div>

// button to increase count
const Button = ({ text, callback }) => (
  <button name='increaseButton' onClick={callback}>
    {text}
  </button>
)

// our App
function App() {
  const [count, setCount] = useState(0)

  const handleClick = (event) => {
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
