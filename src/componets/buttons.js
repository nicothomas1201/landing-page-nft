import '../css/buttons.css'

export function Buttons({className, content}){
  return(
  <button className={`button ${className}`}> {content} </button>
  )
}
