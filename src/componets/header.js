import { Buttons } from "./buttons"
import logo from'../images/logo.png' 
import '../css/header.css'

export function Header({width, height}){
  return(
    <header className="header">
      <div className="header-logo">
        <img src={logo} width={width} height={height} alt=""></img>
      </div>
      <div className="header-buttons">
        <Buttons className='is-primary' content='Iniciar Sesion'/>
        <Buttons className='is-secondary' content='Inciar Sesion'/>
      </div>
    </header>
  )
}
