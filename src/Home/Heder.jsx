import React, { useState, useEffect } from 'react';

const Heder = () => {
  const [data, setData] = useState([]); // لحفظ البيانات
  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/index')
      .then(response => response.json())
      .then(json => setData(json))

  }, []); 
  return (
    <div>
       <ul>
       {data.map((a)=>(
        <li key={a.id}>
          <img src={a.image} alt="" />
          <li>{a.name}</li>
          <h1>Amir </h1>
        </li>
       ))}
       </ul>
    </div>
  );
};

export default Heder;
