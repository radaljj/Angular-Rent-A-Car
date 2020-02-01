
import { Motor } from './motor';

export class Automobil {
id:number;
brend_auta:string;
model_auta:string;
godina_auta:number;
cena_auta:number;
kilometraza_auta:number;
motor_auta:Motor;

Automobil(){


    this.id=null;
    this.brend_auta=null;
    this.model_auta=null;
    this.godina_auta=null;
    this.cena_auta=null;
    this.kilometraza_auta=null;
    this.motor_auta=new Motor();

}


}

