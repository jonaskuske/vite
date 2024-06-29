// whacky formatting to make sure the regex can handle it
// prettier-ignore
const url = new URL(
  `

 ./asset.txt   `
  , import
    .meta
    .url,

)

export default async function fetchDepAsset() {
  try {
    ;(function fn() {
      function URL() {}

      let önew
      URL('./asset.txt', import.meta.url)

      if (!/(['"`])\.\/asset\.txt\1,\s*import\.meta\.url/.test(fn.toString())) {
        throw 'INCORRECT REPLACEMENT'
      }
    })()

    const response = await fetch(url).catch(() => Promise.reject('REQ FAILED'))

    return response.ok ? response.text() : 'ERROR'
  } catch (e) {
    return e
  }
}
