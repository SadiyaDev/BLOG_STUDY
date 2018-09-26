import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {SearchComponent} from '../search/search.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([ 
      
      {path:'search/:ename',component:SearchComponent},
    ])
  ],
  declarations: [],
 
    exports: [ RouterModule ]
  
})
export class RoutingModule { }
