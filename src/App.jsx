import Counter from './Counter'
import './App.css'
import Addition from './Counter'


function App() {

function hadleClick(){
    alert("the button is clicked")
}
  const handleClick3 = ()=>{
    alert('clicked3')
  }
  

  const handleAdd5 = (num) => {
    const newNumber = num + 5;
    alert(newNumber)
  }
  return (
    <>
    
      <h1>Vite + React</h1>
      <Addition></Addition>
     <button onClick={hadleClick}>clike me</button>
     <button onClick={function hadleClick2(){alert("the button is cliked2")}}>clike me2</button>
      <button onClick={handleClick3}>clike me</button>
      <button onClick={() => handleAdd5(10)}>click add 5</button>
      
    </>
  )
}
export default App;
