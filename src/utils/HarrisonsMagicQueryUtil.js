export function convertToQuery(object) {
  let htmlEncode = '?'
  for (let key in object) {
    htmlEncode += key = '=' + object[key] + '&'
  }
  htmlEncode = htmlEncode.substring(0, htmlEncode.length - 1)
  return htmlEncode
}
