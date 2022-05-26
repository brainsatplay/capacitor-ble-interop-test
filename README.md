# capacitor_ble_tinybuild
 capacitor ble test with tinybuild to bundle the webapp

#### In your project root
`npm i`

Edit the index.js and optionally the index.html in the `www/` folder. All public asset files need to end up in `www/`


#### Build step: 
If no tinybuild installed globally: `npm i -g tinybuild` or to keep it in dev dependencies `npm i --save-dev tinybuild`

Build:
- `tinybuild`

#### Android Studio (install it first)
- `npx cap copy` or `npx cap sync` to sync the www/ dist to the platform-specific folders.
- `npx cap open android` to open android studio ready to build and serve the apk.

Build the android project by click the Make Project hammer icon. Then run with your android device connected or the built-in android emulators active.


#### XCode
- `npx cap copy` or `npx cap sync`
- `npx cap open ios` to open xcode ready to build and serve the app
