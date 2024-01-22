import { Service } from 'typedi';

@Service()
export class Pizza {
    private PizzaArray: Array<object>;
  constructor() {
    console.log('Pizza is ready!');
    this.PizzaArray = [
        {
            code: "PEP",
            name: "Peperoni",
            price: 12.50
        },
        {
            code: "MAR",
            name: "Margherita",
            price: 14.00
        },
        {
            code: "REIN",
            name: "La Reine",
            price: 11.50
        },
        {
            code: "FRO",
            name: "La 4 fromages",
            price: 12.00
        },
        {
            code: "CAN",
            name: "La cannibale",
            price: 12.50
        },
        {
            code: "SAV",
            name: "La savoyarde",
            price: 13.00
        },
        {
            code: "ORI",
            name: "L'orientale",
            price: 13.50
        },
        {
            code: "IND",
            name: "L'indienne",
            price: 14.00
        }

    ]
  }

  OhMyPizza(option:any, pizza:object = {}) {
    switch(option){
        case 1:
            return this.PizzaArray;
            break;
        case 2:
            this.PizzaArray.push(pizza)
            break;
        default:
            return {error: "Option not found"};
            break;
    }
  }


}


