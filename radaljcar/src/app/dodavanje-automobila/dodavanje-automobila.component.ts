import { AutomobilService } from './../services/automobil.service';
import { Automobil } from './../automobil';
import { Component, OnInit, OnChanges, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { Motor } from '../motor';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-dodavanje-automobila',
  templateUrl: './dodavanje-automobila.component.html',
  styleUrls: ['./dodavanje-automobila.component.css']
})
export class DodavanjeAutomobilaComponent implements OnInit, OnChanges {

  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() selectedAutomobil:Automobil;


  auto:Automobil=new Automobil();
  constructor(private servis:AutomobilService) { }

  ngOnInit() {
    this.auto.motor_auta=new Motor();
    this.auto.motor_auta.gorivo_motora=null;
    this.auto.motor_auta.potrosnja_motora=0;
    this.auto.motor_auta.snaga_motora=0;

  }

  ngOnChanges(changes: SimpleChanges): void{
    this.auto=this.selectedAutomobil;
    console.log(this.auto);

  }



   isAddAction(id):boolean{
     return isNullOrUndefined(id)||id===0;
   }
 
  debug(form):void{
console.log(form);
  }





  osluskivanjeForme(vozilo:Automobil):void{
   alert('Vozilo je uspesno dodato');
   //dodavanje automobila na server

if(this.isAddAction(vozilo.id)){
  this.servis.dodajAuto(vozilo).subscribe((vozilo:Automobil)=>{
    this.update.emit(true);
  },
  error=>{
    alert('Doslo je do greske');
  }


  );

} else{

 this.servis.izmeniAuto(vozilo).subscribe((vozilo:Automobil)=>{
   this.update.emit(true);
 });
}

    
    
    
  
   }




 
}

