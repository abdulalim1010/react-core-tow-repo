import { useState } from "react"

export default function Addition() {
  const [count, setCount] = useState(0);
  const handleeAdd = () => {
    const newCount=count+1
    setCount(newCount)
  }
  const handleeAddd = () => {
    const newCount=count-1
    setCount(newCount)
  }
  const handlereset = () => {
    const newCount = 0;
    setCount(newCount)
  }

  const countsyle = {
    color: 'red',border:'2px solid green'
    
  }
  return (
    <div style={countsyle}>
      <h3>  Count{count}</h3>
      <button onClick={handleeAdd}>
add+
      </button>
      <button onClick={handleeAddd}>
add-
      </button>
      <button onClick={ handlereset}>reset</button>
    </div>
    
  )
}