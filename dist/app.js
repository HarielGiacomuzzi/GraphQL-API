"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.init();
    }
    init() {
        this.middleware();
    }
    middleware() {
        this.express.use('/', (req, res, next) => {
            res.send({
                hello: 'Hello World'
            });
        });
    }
}
exports.default = new App().express;
