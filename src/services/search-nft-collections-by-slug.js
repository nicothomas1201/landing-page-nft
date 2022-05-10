import { options } from "./api";

export async function searchNftCollectionsBySlug(slug){
  let host = 'opensea13.p.rapidapi.com'
  let endPoint = `/collection/${slug}`
  let baseApi = `https://${host}`
  
  let response = await fetch(`${baseApi}${endPoint}`, options(host))
  return await response.json()
}