import { Buttons } from "./buttons"
import heroImage from '../images/hero-image.png'
import heroAvatar from '../images/hero-avatar.png' 
import '../css/hero.css'



export function Hero(){
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
          <img src={heroImage} width='588' heigth='437' alt='' />
        </div>
        <div className="image-info">
          <div className="avatar">
            <img src={heroAvatar} width='50' height="50" alt="" />
          </div>
          <div className="image-description">
            <h3>Tiny Dancer #2</h3>
            <h4>Aidan Tooth</h4>
          </div>
        </div>
      </div>
    </section>
  )
}