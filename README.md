# Example of Module Federation using a CDN

Use Webpack 5 to retrieve remote modules through a CDN like UNPKG. This example
includes the npm package
[@antgonzales/dog](https://www.npmjs.com/package/@antgonzales/dog), a React
component that fetches pictures of dogs from [dog.ceo](https://dog.ceo). The
package is published on UNPKG at
[unpkg.com/@antgonzales/dog](https://unpkg.com/@antgonzales/dog). The consumer app
has a webpack config that points to a `remote-file.js` published by the package
to make the React component consumable.

Head over to the consumer app, install the deps, and run the `start` script to
see the integration in action.

![Example in action](module-federation-cdn.gif)
