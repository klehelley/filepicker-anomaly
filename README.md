# Filepicker anomaly

This project demonstrates a problem with an implementation of a file list widget, that works with some browsers but not others. And I have no idea why.

This code is a heavily simplified version of the code I have to work with. It demonstrates the exact issue I am trying to fix, without success so far...

## Tools used

* NPM
* Webpack
* VueJS
* jQuery
* Bootstrap

## How to check the anomaly

Just clone the projet and run the following commands to start testing with your favourite browsers:

``` bash
npm install
npm run dev
```

Click on the "Add a file" button to check if it works.

## Browsers tested so far

* Firefox 56/Ubuntu 17.04 : clicking "Add a file" opens a filepicker (may be detected as a pop-up and blocked)
* Chrome 53/Ubuntu 17.04 : the filepicker never appears
* Internet Explorer 11/Windows 7 : clicking "Add a file" opens a filepicker
* Firefox 56/Windows 7 : clicking "Add a file" opens a filepicker (may be detected as a pop-up and blocked)
* Chrome 61/Windows 7 : the filepicker never appears

Is this actually a Chrome issue rather than a problem with my tool stack?

