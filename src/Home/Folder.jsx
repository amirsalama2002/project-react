import React, { useEffect, useState } from 'react'
import "./Folder.css";
export default function Folder() {
  const [name , getName]=useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/users')
      .then(response => response.json())
      .then(json => getName(json))
  }, [])
  
  return (
    <div className='Folder'>
          {name.map((item) => (
          <div key={item.id} className="falcon">
            {/* <img src={item.photo} alt="no imge" /> */}
               <h1>Name: {item.first_name} {item.last_name}</h1>
               <h2>Email: {item.email}</h2>
               <h3>Phone: {item.state}</h3>
               <h4>Jobs: {item.username}</h4>
               <h5>Phone: {item.state}</h5>
          </div>
        ))}
    </div>
  )
}
