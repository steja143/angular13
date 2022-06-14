import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TejaComponent } from './teja/teja.component';



@NgModule({
  declarations: [
    TejaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TejaComponent
  ]
})
export class RathodModule { }
