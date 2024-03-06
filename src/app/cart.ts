import { Payment } from "./payment";
import { Product } from "./product";

export class Cart {
    cartId!:number;
    total!:number;
    payment!:Payment;
    products!:Product[];
}
