
import './App.css'

function App() {
function hadleClick(){
    alert("the button is clicked")
}
  const handleClick3 = ()=>{
    alert('clicked3')
  }
  
  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);
  const reset = () => setValue(0);
  const handleAdd5 = (num) => {
    const newNumber = num + 5;
    alert(newNumber)
  }
  return (
    <>
    
      <h1>Vite + React</h1>
     <button onClick={hadleClick}>clike me</button>
     <button onClick={function hadleClick2(){alert("the button is cliked2")}}>clike me2</button>
      <button onClick={handleClick3}>clike me</button>
      <button onClick={() => handleAdd5(10)}>click add 5</button>
        <div>
      <p>Value: {value}</p>
      <button onClick={increase}>Increase +1</button>
      <button onClick={decrease}>Decrease -1</button>
      <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}
export default Counter; 
