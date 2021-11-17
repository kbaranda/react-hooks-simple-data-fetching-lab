import React, { useEffect, useState } from "react";

function App() {
  let [dogs, setDogs] = useState([])
  let [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((data) => {
      setDogs(data.message)
      setIsLoaded(true)
    })
  }, [])

  if (isLoaded === false){
    return <p>Loading...</p>
  } else {
    return (
      <div>
        <img src={dogs} alt="A Random Dog"/>
      </div>
    )
  }
}

export default App;