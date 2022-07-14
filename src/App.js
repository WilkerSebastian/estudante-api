const express = require("express")
const router = require("./router")

module.exports = class App {

    server;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    middleware() {

        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
    }

    router() {
        this.server.use(router);
    }

}