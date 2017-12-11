export const getCountry = (owner) => {
  const a = owner.lastIndexOf("(");
  const b = owner.lastIndexOf(")");
  const country = owner.substring(a+1,b) || "Unknown"
  return country
}


export const getImage = (id) => {
  const IMG_URL = window.location.host
  const image = `http://${IMG_URL}/public/ship1.jpg`
  return image
}