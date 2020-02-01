import { Automobil } from './../automobil';
import { Component, OnInit } from '@angular/core';


import { AutomobilService } from '../services/automobil.service';



@Component({
  selector: 'app-automobili',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.css']
})
export class AutomobiliComponent implements OnInit {

  automobili:Automobil[];
  selectedAutomobil:Automobil;


  constructor(private usluga:AutomobilService) {
    this.selectedAutomobil=new Automobil();
   }

  ngOnInit() {
    this.getAutomobil();
   }


getAutomobil(){

  this.usluga.getAutomobil().subscribe((automobili:Automobil[])=>{
    this.automobili=automobili;
  });
}






editAuto(auto_id:number){
this.usluga.getAutomobilById(auto_id)
.subscribe(
  (vozilo:Automobil) => {
    this.selectedAutomobil=vozilo;
    console.log(this.selectedAutomobil);
  },
error =>{alert('Ne moze se uzeti id auta'+auto_id);
}
);
}









izbrisiAuto(auto_id:number){
this.usluga.izbrisiAuto(auto_id)
.subscribe( (vozilo:Automobil)=>{
  this.getAutomobil();
} );
}





}
