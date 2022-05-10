const apiKey = '8fe18bf7b2msh04eec54a230d03fp130be5jsn6a7fc457edd7'

export function options(host){
  return {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": host,
      "X-RapidAPI-Key": apiKey
    }
  };
} 

