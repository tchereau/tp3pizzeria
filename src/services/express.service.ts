import { Service } from 'typedi';
import express, { Express, Request, Response } from 'express';
import { Logs } from '../libs/logs.lib';
import { Pizza } from '../libs/pizza.lib';
import fs from 'fs';
@Service()
export class ExpressService {
    private logs: Logs;
    private pizza: Pizza;

    constructor(
    ){
        this.logs = new Logs();
        this.pizza = new Pizza();
        this.logs.info('ExpressService instantiated');
        let app: Express = express();
        let port = process.env.PORT || 3000;

        app.use(express.json());

        app.disable('x-powered-by');

        app.get('/', async (req: Request, res: Response) => {
            this.logs.info(`GET / from ${req.ip}`);
            let data = await fs.promises.readFile('src/views/index.html', 'utf-8');
            return res.status(200).send(data);
        });

        app.get('/api/pizza', async (req: Request, res: Response) => {
            this.logs.info(`GET /api/pizza from ${req.ip}`);
            let pizzas = this.pizza.OhMyPizza(1);
            return res.status(200).send(pizzas);
        });

        app.post('/api/setPizza', async (req: Request, res: Response) => {
            this.logs.info(`POST /api/setPizza from ${req.ip}`);
            let pizza = req.body;
            this.pizza.OhMyPizza(2, pizza);
            return res.status(200).send(pizza);
        });

        
        app.listen(port, () => {
            this.logs.info(`Server listening on port ${port}`);
        });

    }
}