import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, displyTime] = useState(time);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    return displyTime(newTime);
  }

  // setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
