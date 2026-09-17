import { useState,useEffect } from 'react'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  // const [properties, setProperties] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
        fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json"
        )
        .then((response) => response.json())
        .then((data) => {
            setData(data[0]);
            console.log(data[0].capacity.bedroom)
        })
    }, [])

  return (
    <>
      
      <Card property={data} />
      
    </>
  )
}

export default App
