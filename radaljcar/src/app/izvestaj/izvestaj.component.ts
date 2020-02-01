import { AutomobilService } from './../services/automobil.service';
import { Component, OnInit } from '@angular/core';
import { Automobil } from '../automobil';
import { ThrowStmt } from '@angular/compiler';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-izvestaj',
  templateUrl: './izvestaj.component.html',
  styleUrls: ['./izvestaj.component.css']
})
export class IzvestajComponent implements OnInit {

  automobili:Automobil[];
  total=0;
  najstariji:Automobil=null;
  najnoviji:Automobil=null;
  najskuplji:Automobil=null;
  najjeftiniji:Automobil=null;
  constructor(private AutomobilService:AutomobilService) { }



  izracunaj(): void{
    for(const auto of this.automobili){
      this.total += auto.cena_auta;
      if(isNullOrUndefined(this.najstariji)|| auto.godina_auta<this.najstariji.godina_auta){
        this.najstariji=auto;
      }

      if(isNullOrUndefined(this.najnoviji)|| auto.godina_auta>this.najnoviji.godina_auta){
        this.najnoviji=auto;
    }

    if(isNullOrUndefined(this.najskuplji)|| auto.cena_auta>this.najskuplji.cena_auta){
      this.najskuplji=auto;
  }
  
  if(isNullOrUndefined(this.najjeftiniji)|| auto.cena_auta<this.najjeftiniji.cena_auta){
    this.najjeftiniji=auto;
}


  

  }
}

  ngOnInit() {
this.AutomobilService.getAutomobil()
.subscribe((automobili:Automobil[])=>{

 this.automobili=automobili;
 this.izracunaj();
},
error =>{alert('Doslo je do greske')
}
);

  }

}
