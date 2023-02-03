## Running a project
- Install dependencies by navigating to the project's root folder and running the `yarn install` command
- Start the development server by running the `yarn start` command
- Access the server at [http://localhost:5050/](http://localhost:5050/)

## Working with the project
- Find landing page at [http://localhost:5050/landing.html](http://localhost:5050/landing.html)
- Find layout system page at [http://localhost:5050/layout-docs.html](http://localhost:5050/layout-docs.html)
- If you need product logos, you can access them via [@jetbrains/logos](https://www.npmjs.com/package/@jetbrains/logos) package. Note that you have to install it manually.

## Rules
- Do not change the current file structure
- Do not use jQuery
- Do not use external layout libraries, only [http://localhost:5050/layout-docs.html](http://localhost:5050/layout-docs.html)


- Use only PostCSS
- Use breakpoints from `exterrnal-libs/breakpoints/index.css`. You can find usage example in `index.entry.pcss`
- Use CSS variables

## Layout requirements 
- Adaptivity: there should be desktop, tablet and mobile versions, but use desktop-first approach
- Cross-browser compatibility: support for all modern browsers, including IE11 and mobile browsers
- Fonts: use standard system fonts
- When scrolling, the site menu must stick to the top browser border
- Make product section interactive. When the name of the product is hovered over, logo should stay opaque while other elements become semi-transparent. Product names musy also become links. On mobile, element transparency should not be implemented. 
- Behavior of interactive elements that are not specified in the design doc and readme.md is left up to you
- You don't have to make forms interactive and can leave at as a static layout

## Feedback
- Be sure to mention problems that you've encountered