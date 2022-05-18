import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist/todolist.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodolistComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TodolistComponent]
})
export class TodoModule { }
