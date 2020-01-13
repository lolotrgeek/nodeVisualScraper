const capture = require('./src/screen')
const process = require('./src/process')
const utils = require('./src/utils')




// const img = capture.screenPixels()
// const img = capture.takeScreenshot()
// console.log(img)

// const canvas = utils.structureImage(img)
// const canvas = utils.structureImage({image: './1578926192766.png', width: 1920, height: 1018})
// console.log(canvas)


capture.takeScreenshot().then(img => process.text(img).then(text => {
    utils.saveFile({data : text}).then(done => done)
})).catch(err => Error(err))

async function main () {
    try {
        const img = await capture.takeScreenshot()
        const data = await process.text(img)
        const file = utils.saveFile(data)
        console.log(file)
    }
    catch(err){Error(err)}
}

(main())
