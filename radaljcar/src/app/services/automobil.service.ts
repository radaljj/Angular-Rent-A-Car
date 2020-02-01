import { Injectable } from '@angular/core';
import { Automobil } from '../automobil';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutomobilService {

  constructor(private http:HttpClient) {

   
   }
  


   getAutomobilById(auto_id:number){
     return this.http.get(`http://localhost:3000/automobili/${auto_id}`);

   }

  getAutomobil(): Observable<any>{
return this.http.get('http://localhost:3000/automobili');
  }

  dodajAuto(vozilo:Automobil):Observable<any>{
 
    return this.http.post('http://localhost:3000/automobili',vozilo);
  }

izbrisiAuto(auto_id:number){
  return this.http.delete('http://localhost:3000/automobili/'+ auto_id);
}

izmeniAuto(auto:Automobil){

  return this.http.put(`http://localhost:3000/automobili/${auto.id}`,auto);

}





}
