var path    = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:  [
        'webpack-hot-middleware/client',
        './src/client'
    ],
    output: {
        path:       path.join(__dirname, 'dist'),
        publicPath: '/assets/',
        filename:   'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'shared'],
        extensions:        ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: [
                        ['transform-object-rest-spread'],
                        ['transform-class-properties'],
                        ['transform-decorators-legacy'],
                        [
                            'react-transform',
                            {
                                transforms: [
                                    {
                                        transform: 'react-transform-hmr',
                                        imports:    ['react'],
                                        locals:     ['module']
                                    }
                                ]
                            }
                        ]
                    ]
                }
            },
            {
                test:    /(\.less|\.css)$/,
                loader: ExtractTextPlugin.extract("style", "css!less!postcss")
            },
            {
                test: /\.png$/,
                loader: 'url?limit=100000'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("app.css", {
            allChunks: true
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:' + (process.env.PORT || 3000)
        }
    }
};
