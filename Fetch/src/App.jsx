import { useState } from 'react'
import Nav from './Nav';
import Content from './Content';
import './App.css'

function App() {
  const[current, setCurrent] = useState('comments');


  return (
    <>
      <Nav current={current} setCurrent={setCurrent}/>
      <Content current={current}/>
    </>
  )
}

export default App
