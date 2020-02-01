import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { AutomobiliComponent } from './automobili/automobili.component';
import { IzvestajComponent } from './izvestaj/izvestaj.component';



const routes: Routes = [
  {path: '',component: TablaComponent},
  {path: 'izvestaji',component: IzvestajComponent},
  {path: 'automobili',component: AutomobiliComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
