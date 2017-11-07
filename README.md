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

Just clone the projet and run the following command to start testing with your favourite browsers:

``` bash
npm run dev
```

Click on the "Add a file" button to check if it works.

## Browsers tested so far

* Firefox 56/Ubuntu 17.04 : clicking "Add a file" opens a filepicker
* Chrome 53/Ubuntu 17.04 : the filepicker never appears

Also, when I first hears about the issue, it was because one of our users reported the widget not working with Firefox, but being OK with Chrome (on Windows, however no precise version number was given to me).
