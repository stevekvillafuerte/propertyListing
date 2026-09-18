import { useState,useEffect } from 'react'
import './App.css'
import CardContainer from './Components/CardContainer'
import FilterBar from './Components/FilterBar'
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
        fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json"
        )
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
    }, [])

  return (
    <>
      <FilterBar/>
      <CardContainer datas={data}/>
      
    </>
  )
}

export default App
