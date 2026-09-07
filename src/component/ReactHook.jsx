import React from 'react'
function ReactHook() {
  const [counter, setCounter] = React.useState(100);
  function IncreaseCounterValue() {
    //alert('hii');
    setCounter(counter + 10);
  }
  function DecreaseCounterValue() {
    setCounter(counter - 10);
  }


  return (
    <div>
      <h2 style={{ color: "red" }}>Welcome to React using Vite</h2>
      <h1 >counter value={counter}</h1>
      <button onClick={IncreaseCounterValue}>Increase Counter</button>
      <br></br>
      <button onClick={DecreaseCounterValue}>Decrease Counter</button>
    </div>
  )
}
export default ReactHook
