# Microsoft Edge S.U.R.F. Game
The S.U.R.F. game from edge://surf

![image](https://user-images.githubusercontent.com/16235094/68094282-c960d400-fe6c-11e9-8719-e3da9a5149ee.png)

I did not create this game; I just copied the files from Microsoft Edge and modified some URLS so it would work outside of Edge.

## Playing
Play the game at https://surf.jackbuehner.com

## What I changed
- Changed some URLs
- Added a favicon
- Added an ico favicon to support multiple icon sizes
- Added a manifest.json so the website can be added as a PWA app
- Ran minimized JavaScript files through a beautifier to make modification easier.
- Updated functions in surf.bundle.js which relied on [WebUI](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/webui_explainer.md) and called into native code on Edge. Those functions now use localStorage to save the game stats.

## What is not working
- Clicking the treasure chest does not open the popup with the new Edge logo

If you know how to fix anything that is not working, feel free to open a pull request. I'll merge it as soon as I see it and confirm it does not break anything.
