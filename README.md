# Node Visual Scraper

## Purpose
Look at pixels, use inputs, extract meaning.

## Use Cases
Data scraping where DOM is inaccessible.

Testing Apps.

Automating Repetitive Tasks.

## Control Loop
get pixels --> feed into model --> perform actions --> save result

## Install

### Reqirements
`< node v12`

### Windows
Use a PreBuilt openCV, it's better than letting npm lift and build it...

```
choco install OpenCV -y -version 4.1.0
```
Do variables with powershell ( keep `$` in commands)

Environment Variables
```
$env:OPENCV4NODEJS_DISABLE_AUTOBUILD = 1
$env:OPENCV_INCLUDE_DIR = C:\tools\opencv\build\include
$env:OPENCV_LIB_DIR = C:\tools\opencv\build\x64\vc15\lib
```

System Variable
```
OPENCV_BIN_DIR = C:\tools\opencv\build\x64\vc15\bin
```


## Dependencies
[OpenCV] https://opencv.org/releases/

[Puppeteer] https://developers.google.com/web/tools/puppeteer/get-started

[Jimp] https://github.com/oliver-moran/jimp

[Tesseract] https://github.com/naptha/tesseract.js