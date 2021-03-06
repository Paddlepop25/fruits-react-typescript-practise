import React, { MouseEvent, useState } from 'react'
import './App.css'

// components
import Banana from './components/Banana'
import Strawberry from './components/Strawberry'
import Apple from './components/Apple'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

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
