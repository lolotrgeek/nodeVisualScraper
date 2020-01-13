const { createCanvas, Image, loadImage   } = require('canvas')

/**
 * 
 * @param {object} img
 * @param {buffer} img.image image data as a buffer
 * @param {number} img.width 
 * @param {number} img.height  
 *   
 */
function structureImage(img) {
    const canvas = createCanvas(img.width, img.height)
    const context = canvas.getContext('2d')
    const image = new Image()
    image.onload = () => context.drawImage(image, 0 , 0)
    image.onerror = err => { throw err }
    image.src = img.image
    return canvas.toBuffer()
}


module.exports = {
    structureImage: structureImage
}