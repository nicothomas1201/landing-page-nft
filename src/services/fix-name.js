export function fixName(string){
  let newString = string.split('')
  let indexFind = []
  let message = []
  let space
  newString.forEach( ( item, index ) => {
    if(item === ' '){
      indexFind.push(index)
      space = true
    } else space = false
  })

  if(space !== false){
    console.log('hola')
    indexFind.forEach( item => {
      message = newString.fill('%20', item, item + 1)
    })
    return message.join('')
  } else if(space === false){
    return newString.join('')
  }
 
  
}