import { Component, OnInit,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
data='';
  constructor() { }
@Output() updateDataEvent=new EventEmitter<string>()
  ngOnInit(): void {
  }

}
