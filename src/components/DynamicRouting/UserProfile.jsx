import React from 'react';
import {useParams} from 'react-router-dom';

const UserProfile = () => {
    const users={
      1: {name:'John Deo', age: 25},
      2:{name:'Jane Doe', age: 30},
      3:{name:'Smith', age: 35},
      4:{name:'Doe', age: 40},
      5:{name:'Alex', age: 45}
    }
    const {id} = useParams();
    const user = users[id];
    if(!user) 
      {
        return <h1>user not found</h1>
      }
  return (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
    </div>
  )
}

export default UserProfile