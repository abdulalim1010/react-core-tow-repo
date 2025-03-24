import Friend from './Friend'
import { use } from "react"


export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise)
  
  
  return (
    <div className="cardd">
      <h1>friends:{friends.length}</h1>
      {
        friends.map(friend=><Friend friend={friend}></Friend>)
      }
    </div>
    
  )
}