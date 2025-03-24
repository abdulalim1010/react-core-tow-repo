import Counter from './Counter'
import './App.css'
import Addition from './Counter'
import Users from './Users'
import Friends from './Friends'
import { Suspense } from 'react'



const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();
function handleClick(){
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
      <Suspense fallback={<h3>loading ...</h3>}>
        
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>friends are comming for treat</h3>

      }>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Addition></Addition>
     <button onClick={handleClick}>clike me</button>
     <button onClick={function hadleClick2(){alert("the button is cliked2")}}>clike me2</button>
      <button onClick={handleClick3}>clike me</button>
      <button onClick={() => handleAdd5(10)}>click add 5</button>
      
    </>
  )
}
export default App;
