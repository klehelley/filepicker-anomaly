# Filepicker anomaly

This project demonstrates a problem with an implementation of a file list widget, implemented with the help of VueJS, that works with some browsers but not others. To be more precise, clicking the "Add a file" button should trigger the opening of a file picker, but that is not the case with Chrome. And I have no idea why.

This code is a heavily simplified version of what I have to work with. It demonstrates the exact issue I am trying to fix, without success so far...

The issue seems to be related to the way VueJS and Chrome behave when used together for my specific use-case. In the `mounted` hook used in the `file-upload` component, the Javascript call to `click()` seems not to be working correctly (do note that when jQuery is added to the mix, a `click` event is indeed captured and processed before letting the browser open the file picker... when it does).

## Overview

This project is made of 3 separate codebases, with each in a given folder :

* vuejs-webpack
    * this codebase is the closest to the one I have to fix (though it is already somewhat simplified)
    * this codebase demonstrates the issue
    * this codebase uses `.vue` files
    * to test the component, make sure you have NodeJS installed and run the following commands to compile the code and start a local server:
      ``` bash
      cd vuejs-webpack/
      npm install
      npm run dev
      ```
* vuejs-no-webpack
    * this codebase demonstrates the issue
    * this codebase does not use `.vue` file and does not require the use of Webpack or NodeJS
    * to test the component, just open the file `vuejs-no-webpack/index.html` with your favourite browsers
* no-vuejs
    * this codebase works correctly
    * this codebase only uses vanilla Javascript
    * to test the component, just open the file `no-vuejs/index.html` with your favourite browsers

## How to check the anomaly

Just click on the "Add a file" button to check if it works.

## Browsers tested so far

* Firefox 56/Ubuntu 17.04 : clicking "Add a file" opens a filepicker (may be detected as a pop-up and blocked)
* Chrome 53/Ubuntu 17.04 : the filepicker never appears
* Internet Explorer 11/Windows 7 : clicking "Add a file" opens a filepicker
* Firefox 56/Windows 7 : clicking "Add a file" opens a filepicker (may be detected as a pop-up and blocked)
* Chrome 61/Windows 7 : the filepicker never appears

Where is the actual issue to fix : in my code, in VueJS or in Chrome?

