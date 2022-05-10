 import { options } from "./api";
 import { getSlug } from "./get-slug";

 export async function getTopCollectionsNftSlug(day = 1){
   let host = 'top-nft-collections-and-sales.p.rapidapi.com'
   let endPoint = `/collections/${day}d`
   let baseApi = `https://${host}`
   
   let response = await fetch(`${baseApi}${endPoint}`, options(host)) 
   let data = await response.json()
   let url = await data.map( item => item.collection_url)
   let slugs = getSlug(url)
   return slugs
}