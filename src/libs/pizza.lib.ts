import { Service } from 'typedi';

type ObjPizza = {
    id: number,
    code: string,
    name: string,
    price: number
}
@Service()
export class Pizza {
    private PizzaArray: Array<ObjPizza>;
  constructor() {
    console.log('Pizza is ready!');
    this.PizzaArray = [
        {
            id: 1,
            code: "PEP",
            name: "Peperoni",
            price: 12.50
        },
        {
            id: 2,
            code: "MAR",
            name: "Margherita",
            price: 14.00
        },
        {
            id: 3,
            code: "REIN",
            name: "La Reine",
            price: 11.50
        },
        {
            id: 4,
            code: "FRO",
            name: "La 4 fromages",
            price: 12.00
        },
        {
            id: 5,
            code: "CAN",
            name: "La cannibale",
            price: 12.50
        },
        {
            id: 6,
            code: "SAV",
            name: "La savoyarde",
            price: 13.00
        },
        {
            id: 7,
            code: "ORI",
            name: "L'orientale",
            price: 13.50
        },
        {
            id: 8,
            code: "IND",
            name: "L'indienne",
            price: 14.00
        }

    ]
  }

  OhMyPizza(option:any, pizza:ObjPizza = {id: 0, code: "", name: "", price: 0}) {
    switch(option){
        case 1:
            return this.PizzaArray;
        case 2:
            pizza['id'] = this.PizzaArray.length + 1;
            this.PizzaArray.push(pizza)
            break;
        case 3:
            this.PizzaArray.forEach((Pizza:ObjPizza, index) => {      
                if(Pizza.id == pizza.id){
                    this.PizzaArray[index] = pizza;
                    return;
                }
            })
            break;
        case 4:
            this.PizzaArray.forEach((Pizza:ObjPizza, index) => {
                if(Pizza.id == pizza.id){
                    // remove the element from the array
                    this.PizzaArray.splice(index, 1);
                    return;
                }
            })
            break;
        default:
            return {error: "Option not found"};
    }
  }


}


