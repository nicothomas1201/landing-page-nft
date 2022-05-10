import {  useEffect, useState } from "react"
import { getTopCollectionsNftSlug, searchNftCollectionsBySlug } from "../services"

export function ThreeCollections(){
  let [collection, setCollection] = useState({})
  
  useEffect(function (){
    getTopCollectionsNftSlug(1).then(allSlugs => {
      let slugs = allSlugs.filter((item, index) => index <= 2)
      let dataNft = []
      slugs.forEach( slug => {
        searchNftCollectionsBySlug(slug).then(res => {
          let { image, name, description } = {
            image: res.collection.banner_image_url,
            name: res.collection.name,
            description: res.collection.description,
          } 
          dataNft.push({image, name, description})
        })
      })

      console.log(dataNft)
      // setCollection(dataNft)
    })
  }, [])


  
  return (
    <section className="section-threeCollections">
      {
      // console.log(collection)
      }

    </section>
  )
}