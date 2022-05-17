import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workapp';
  showMsg=true;
  clscolor='blue';
  showvalue='one';
  clasvalue='red';
  rathod='green';
  datalist='https://www.youtube.com/watch?v=jjyhu2BTZEI&list=PLp50dWW_m40WYX5tynzpPf0a3ZgjGT1bI&index=20';
  updatedLink='http://www.oracle.com';
  one='teja';
  firstname='';
  Placeholder='Enter name of your first';
  clsname2='prasad';
  user=[
    {id:1,name:"prasad",age:23},
    {id:2,name:"teja",age:23},
    {id:3,name:"kumar",age:23}
  ]

  readMe(){
    console.log("click the button");
  }
  shoeAlert(){
    alert("this value is getting to the variable is used by the component");
  }
  consoleLog(){
    alert("data the last transfer")
  }
}
