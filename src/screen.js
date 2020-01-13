'use strict'
const robot = require("robotjs")
const Jimp = require('jimp')
const screenshot = require('screenshot-desktop')

/**
 * 
 */
function screenPixels() {
    let img = robot.screen.capture(0, 0)
    return { image: img.image, width: img.width, height: img.height }
}

/**
 * 
 * @param {string} filename use MIME type .bmp .jpeg .png .tiff .gif
 * @todo bitmap saves incorrect colors
 * @todo doesn't capture mouse pixels
 * @todo consider making async/promise based
 */
function takeScreenshot(filename) {
    if (!filename) filename = Date.now().toString() + '.png'
    if (typeof filename !== 'string') return Error('filname must be a string')
    const path = './output/'+ filename
    const img = screenPixels()
    new Jimp({ data: img.image, width: img.width, height: img.height }, (err, image) => {
        if (err) return err
        image.getBuffer(Jimp.MIME_PNG, buffer =>{console.log(buffer); return buffer} )
        image.write(path)
    })

}



/**
 * 
 */
function desktopScreenshot() {
    return new Promise((resolve, reject) => {
        screenshot().then(img => resolve(img)).catch(err => reject(err))
    })
}

module.exports = {
    takeScreenshot: takeScreenshot,
    desktopScreenshot: desktopScreenshot,
    screenPixels: screenPixels,
}