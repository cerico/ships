export const getCountry = (owner) => {
  const a = owner.lastIndexOf("(");
  const b = owner.lastIndexOf(")");
  const country = owner.substring(a+1,b) || "Unknown"
  return country
}


export const getImage = (id) => {
  const IMG_URL = window.location.host
  const number = parseInt(Math.random()*2)+1
  const image = `http://${IMG_URL}/public/ship${number}.jpg`
  return image
}