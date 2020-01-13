const Tesseract = require('tesseract.js')
const { createWorker, setLogging } = Tesseract;
setLogging(true)

/**
 * 
 * @param {*} img path to local image, Buffer with binary image, base64 encoded image fits data:image\/([a-zA-Z]*);base64,([^"]*) regexp
 */
function processText(img) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { text } } = await Tesseract.recognize(img, 'eng', { logger: m => console.log(m) })
      resolve(text)
    } catch (err) { reject(err) }
  })
}
// function processText(worker, img) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const {data: {text}} = await worker.recognize(img)
//       resolve(text)
//     } catch (err) { reject(err) }
//   })
// }

function startWorker() {
  return new Promise(async (resolve, reject) => {
    try {
      const worker = createWorker()
      await worker.load()
      await worker.loadLanguage('eng')
      await worker.initialize('eng')
      resolve(worker)
    }
    catch (err) { reject(err) }
  })
}

function endWorker(worker) {
  return new Promise(async (resolve, reject) => {
    try {
      await worker.terminate()
      resolve(worker)
    }
    catch (err) { reject(err) }
  })
}

module.exports = {
  text: processText,
  startWorker: startWorker,
  endWorker: endWorker
}