
import { use } from "react"

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);
  console.log(users)
  return (
    <div className="cardd">
      <h1>Users:{users.length}</h1>
    </div>
  )
}