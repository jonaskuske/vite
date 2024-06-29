export default function startWorker(callback) {
  // whacky formatting to make sure the regex can handle it
  // prettier-ignore
  const worker = new Worker(new
    URL (
  `

 dep-with-relative-worker-url/worker.js   `
  , import
    .meta
        .url,
    ),

)

  worker.onmessage = (evt) => callback(evt.data)
}
