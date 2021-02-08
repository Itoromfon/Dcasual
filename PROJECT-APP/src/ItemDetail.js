import React, { useEffect, useState } from "react"
import "./Style.css"

function ItemDetail({ match }) {

  const [item, setItem] = useState({
      images: {}
  })

  useEffect(() => {
      fetchItem()
      console.log(match )
  }, [])

  const fetchItem = async () => {
      const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`)
      const item = await fetchItem.json()
      setItem(item)
      console.log(item)
  }

  return(
    <div>
      <h1>Item</h1>
      <h2>{item.name}</h2>
      <img src={item.images.transparent} />
    </div>
  )
}

export default ItemDetail