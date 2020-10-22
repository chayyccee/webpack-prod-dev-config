# webpack-prod-dev-config

As you many already know, Webpack is a build tool for asset bundling and dependency management.
Webpack can be configured by a config file for development and production builds.

This was bootstrapped from scratch with up-to-date packages, loaders and plugins, and is production ready.

# A few things you should know

I used the clean-webpack-plugin to remove old build artifacts from the public directory.
The html-webpack-plugin helps manage the HTML file, including injecting JavaScript into the file via script tags.
I separated webpack configs for development and production and created a common config file to merge config files using the webpack-merge plugin.
I included loaders like css-loader, style-loader, and the mini-css-extract-plugin (which functions as both a plugin and a loader) to handle app styles.
New JavaScript syntax and features are handled by using Babel and babel-loader.
I included content hashes in file names to help with cache busting and managing new versions of released code.
Can minify CSS with the optimize-css-assets-webpack-plugin and can minify our JavaScript with the terser-webpack-plugin.

#Commands

To begin,

Clone or download repo,

enter npm install
//to download the node_modules

enter npm start
//for development 

enter npm run-script build
//for production and see source map n all

enter npm run-script dev
//for the webpack dev server
