import * as express from 'express';

class App {

    public express: express.Application;

    constructor(){
        this.express = express();
        this.init();
    }

    private init(): void{
        this.middleware();
    }

    private middleware(): void{
        this.express.use('/', (req, res, next) => {
            res.send({
                hello: 'Hello World'
            });
        });
    }

}

export default new App().express;