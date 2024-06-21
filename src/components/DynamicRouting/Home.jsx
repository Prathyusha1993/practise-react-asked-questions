import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {    
   const users = [
    {id:1, name: 'John'},
    {id:2, name: 'Jane'},
    {id:3,name: 'Smith'},
    {id:4,name: 'Doe'},
    {id:5,name: 'Alex' }
   ];
  return (
    <div>
       <ul>
        {users.map((user) => {
            return <li>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
        })}
       </ul>
    </div>
  )
}

export default Home