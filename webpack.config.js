var path = require('path');

module.exports = {
    entry: "./lib/my_app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    }
};