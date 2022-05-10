
export function getSlug(url){
  let slugs = url.map(item => {
    let indexStartSlug = item.indexOf('/', item.indexOf('collection'))
    return item.substring(indexStartSlug + 1, item.length)
  })

  return slugs
}