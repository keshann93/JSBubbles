<div align="center">
<img height="180px" src="https://raw.githubusercontent.com/Raathigesh/JSBubbles/master/docs/assets/bubbles.png">
<br />
<br />
<a href="https://github.com/Raathigesh/JSBubbles/actions">
  <img src="https://img.shields.io/github/workflow/status/Raathigesh/JSBubbles/production-build?style=flat-square" />
</a>
<img src="https://img.shields.io/github/license/Raathigesh/JSBubbles.svg?style=flat-square" />
<br />
<br />
<br />
</div>

> This project is still in active development. Please check back later <3

JSBubbles is a VSCode extension which makes it easy to find and read JavaScript without switching back and forth between multiple files.

JSBubbles is inspired by [Code bubbles](http://www.andrewbragdon.com/codebubbles_site.asp), few ideas of [the Light table IDE](https://www.chris-granger.com/2012/04/12/light-table-a-new-ide-concept/) and various other projects.

## Getting started

- Install the extension from [marketplace](https://marketplace.visualstudio.com/items?itemName=Raathigeshan.js-bubbles).
- Click on the <img src="https://raw.githubusercontent.com/Raathigesh/JSBubbles/master/docs/assets/Trigger%20icon.png" height="30px"> icon on the top right corner of any file to open the JS Bubbles panel.

## Using JS Bubbles

### Indexing your project

- When you open the extension, you will be prompted to index your project.
  <img src="https://raw.githubusercontent.com/Raathigesh/JSBubbles/master/docs/assets/LandingPage.png">
- If you use path alias (like Webpack's resolve rules), make sure to click the **"Configure path map"** and add your module alias rules in the UI.
- Then go ahead and click **"Start Indexing"**. This will take a few minutues.

### Using JS Bubbles to navigate and read code

  <img src="https://raw.githubusercontent.com/Raathigesh/JSBubbles/master/docs/assets/Code bubbles.gif">

- Once the indexing completes, you can search for any symbol in your project using the fuzzy search bar.
- Once your add a symbol to the stage, you can click on the highlighted markers to open other connecting symbols.
- You can also move the symbols on the stage around as you prefer.
- Closing a symbol will also close all the other symbols connected to it.

## Contributing

Have a look at our [contribution guide](docs/contributing.md).
