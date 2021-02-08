import React, { useEffect, useState } from "react"
import "./Style.css"
import { Link } from "react-router-dom"

function Shop() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get")
    
    const items = await data.json()
    console.log("items")
    setItems(items.items)
  }

  return(
    <div>
      <h1>Shop Page</h1>
      {items.map(item => (
       <h2 key={item.itemid}>
        <Link to={`/shop/${item.itemid}`}>{item.name}</Link> 
         </h2> 
      ))}
    </div>
  )
}

export default Shop