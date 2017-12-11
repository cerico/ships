export const getCountry = (owner) => {
  const a = owner.lastIndexOf("(");
  const b = owner.lastIndexOf(")");
  const country = owner.substring(a+1,b) || "Unknown"
  return country
}