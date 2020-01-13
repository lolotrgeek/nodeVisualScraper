const capture = require('./src/screen')
const process = require('./src/process')
const utils = require('./src/utils')




// const img = capture.screenPixels()
const img = capture.takeScreenshot()
console.log(img)

// const canvas = utils.structureImage(img)
// const canvas = utils.structureImage({image: './1578926192766.png', width: 1920, height: 1018})
// console.log(canvas)


// process.text(img).then(text => {
//     console.log(text)
// })