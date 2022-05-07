import { Buttons } from "./buttons"
import '../css/hero.css'
import { searchNftAssets } from "../utils/search-nft"
import { useEffect, useState } from 'react'



export function Hero(){
  const [image, setImage] = useState({})

  useEffect( () => {
    searchNftAssets({string: 'tinydancercollection'}).then(assets => {
      let id = 274634595
      let image = assets.filter(image => image.id === id)
      console.log(image)
      let { url, avatar, title, name } = {
        url: image[0].image_url,
        avatar: image[0].creator.profile_img_url,
        title: image[0].name,
        name: image[0].creator.user.username,
      }
      setImage({url, avatar, title, name})
    })
  }, [])

  // console.log(image)

  return(
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Descubra, recopile y venda NFT extraordinarios
        </h1>
        <p className="hero-description">
          en el primer y más grande mercado de NFT del mundo
        </p>
        <Buttons className={'is-primary'} content={'Explorar'} />
      </div>

      <div className="hero-image">
        <div className="image-container">
          <img src={image.url} width='500' heigth='437' alt='' />
        </div>
        <div className="image-info">
          <div className="avatar">
            <img src={image.avatar} width='50' height="50" alt="" />
          </div>
          <div className="image-description">
            <h3>{image.title}</h3>
            <h4>{image.name}</h4>
          </div>
        </div>
      </div>
    </section>
  )
}