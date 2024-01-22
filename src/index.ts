import 'reflect-metadata';
import container from 'typedi';
import { ExpressService } from './services/express.service';
import { Logs } from './libs/logs.lib';
import { Pizza } from './libs/pizza.lib';
import { config } from 'dotenv';
config();

/* console.log(pizza.getPizza(1));
console.log(pizza.getPizza(2, {code: "CAL", name: "Calzone", price: 14.50}));
console.log(pizza.getPizza(1)); */

process.env.TZ = 'Europe/Paris';
let log = new Logs();
log.log('App started');
container.get(ExpressService)

