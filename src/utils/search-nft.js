import { apiKey, baseApi } from "./api";

export async function searchNftAssets({string} = {}){
  const endpoint = `assets?collection=${string}&order_direction=desc&limit=20&include_orders=false`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey
    }
  };
  let url = `${baseApi}${endpoint}`
  
  let response = await fetch(url, options)
  let { assets : nftCollection} = await response.json()
  return nftCollection
}