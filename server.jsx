import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match } from 'react-router';
import { store, history, createProvider } from './src/shared/provider';
import routes from './src/shared/routes';

const app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true  }
}));

app.use('/dist', express.static(__dirname + '/dist'));

app.use(function(req, res) {
    const location = createLocation(req.url);

    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if(err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }

        if(!renderProps)
            return res.status(404).end('Not found');

        function renderView() {
            const InitialView = createProvider(renderProps);

            const componentHTML = renderToString(InitialView);
            const initialState = store.getState();

            const HTML = `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8">
                        <title>Carpooling</title>

                        <script>
                            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                        </script>
                        <link href="/app.css" type="text/css" rel="stylesheet" />
                    </head>
                    <body>
                        <div id="react-view">${componentHTML}</div>
                        <script type="application/javascript" src="/bundle.js"></script>
                    </body>
                </html>
            `;

            return HTML;
        }

        res.end(renderView());
    });
});

export default app;
