
import { Card } from "./card";
import { Cart } from "./cart";

export class Payment {
    paymentId!:number;
    type!:string;
    status!:string;
    card!:Card;
    cart!:Cart;
}
