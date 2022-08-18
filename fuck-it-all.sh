#!/bin/bash

killall java
cordova clean android
cordova platform rm android
rm -rf node_modules
npm i
cordova platform add android@latest
#cordova plugin add cordova-plugin-androidx
cordova plugin add nodejs-mobile-cordova
cordova plugin add cordova-plugin-exclude-files
cordova build android --debug
ls -lah platforms/android/app/build/outputs/apk/debug/app-debug.apk
