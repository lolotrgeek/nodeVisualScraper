const Tesseract = require('tesseract.js')
const { createWorker } = Tesseract;

/**
 * 
 * @param {*} img path to local image, Buffer with binary image, base64 encoded image fits data:image\/([a-zA-Z]*);base64,([^"]*) regexp
 */
function processText(img) {
  return new Promise(async (resolve, reject) => {
    const worker = createWorker();
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(img);
    console.log(text);
    resolve(text)
  })

}
//   Tesseract.recognize(
//     img,
//     'eng',
//     { logger: m => console.log(m) }
//   ).then(({ data: { text } }) => {
//     console.log(text);
//   })
// }


module.exports = {
  text: processText
}