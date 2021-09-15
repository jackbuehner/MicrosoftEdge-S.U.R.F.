# Microsoft Edge's *Let's Surf*
The *Let's Surf* game from ``edge://surf``

<p align="center">
  <img src="https://i.imgur.com/9ybOdy7.png"/>
</p>

The game is created by Microsoft, please see the **Credits** in the game menu for more information. The files in this repo are from Microsoft Edge; however, some of them have been modified so the game can function independently from Edge.

## Play
Play the game online at https://surf.jackbuehner.com

## Changes
- Changed file paths so the repo is more organized.
- Added an SVG favicon.
- Added the ``manifest.json`` file so the site can be installed as a PWA app.
- Pretty-printed the ``surf.bundle.js`` file to ease the modification process.
  - Use ``localStorage`` function to save the stats instead of the original [WebUI](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/webui_explainer.md) ones (``chrome.send`` in particular).
- Added mobile support. The game is responsive to most screen sizes.

More information can be seen in the Pull requests section.

## Contribute
If you know how to fix anything that is not working, feel free to open a pull request. I'll merge it as soon as I see it and confirm it does not break anything.
