import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor() { }
@Input() totalcity:{name:string,age:string,lastname:string}={name:'',age:'',lastname:''};
  ngOnInit(): void {
  }

}
