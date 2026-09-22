import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  const [pointer, setPointer] = useState(1000);
  const [product,setProduct]=useState([]);

  useEffect(() => {
    async function fetchData(){
      try{
        const data=await fetch("https://fakestoreapi.com/products/1");
        const jsonData=await data.json();
        console.log(jsonData);
        setProduct(jsonData);

      }
      catch(e){
        console.log("error is:"+e)
      }

    }
    fetchData();

  },[]);
    //console.log("hey...using useEffect hook, count = " + count);
    //console.log("hey...using useEffect hook, pointer = " + pointer);
  //}, [count, pointer]);

  return (
    <div>
      useEffect

      <h2 style={{ color: 'red' }}>
        count = {count}
      </h2>

      <h2 style={{ color: 'green' }}>
        pointer = {pointer}
      </h2>
    <div>
  {JSON.stringify(product)}
</div>
    <button onClick={()=>setCount(count+10)}>
      Increase count
    </button>
    </div>
  );
}

export default UseEffect;