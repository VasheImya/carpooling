import express from 'express';

function rand(max) {
    return Math.floor(Math.random() * max) || 1;
}

export default function(app) {
    app.get('/cars', (req, res) => {
        const cars = rand(10);
        const routes = rand(30);
        const price = rand(50);
        const quality = rand(5);

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 200);
        });

        promise.then(() => {
            res.json({cars, routes, price, quality});
        });
    });
};
