import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workapp';
  data=50;
  deta="x";
  click=0;
  update(){
   this.data=this.data+1;
   this.click=this.click+1;
  }
  decrease(){
    this.data=this.data-1;
    this.click=this.click+1;
  }
  userlist=[
    {name:"teja",age:"12",lastname:"prasad"},
    {name:"teja",age:"12",lastname:"prasad"},
    {name:"teja",age:"12",lastname:"prasad"},
    {name:"teja",age:"12",lastname:"prasad"},
    {name:"teja",age:"12",lastname:"prasad"},
    {name:"teja",age:"12",lastname:"prasad"},

  ]
  
  updateData(item:string){
    console.log(item);
    this.deta=item;
  }
}
