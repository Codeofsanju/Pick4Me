const path = require('path');

module.exports = {
    entry: './src/apps.js', // for webpack input and output dir
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: { // for babel
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },

    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};


