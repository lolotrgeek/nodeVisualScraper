const { createCanvas, Image, loadImage   } = require('canvas')
const fs = require('fs')

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

/**
 * 
 * @param {object} data
 * @param {*} data.filename
 * @param {*} data.data
 */
function saveFile(data) {
    if(!data) return null
    if(!data.filename) data.filename = Date.now().toString()
    const path = './output/'+data.filename
    fs.appendFile(path, data.data, (err) => new Promise((resolve, reject) => data.data ? resolve(data) : reject(err)))
}

module.exports = {
    structureImage: structureImage,
    saveFile: saveFile
}