import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
title:string='teja';
fruits:string[]=[];
firstname="";
lastname="";
  constructor() { }

  ngOnInit(): void {
    this.fruits.push("prasad");
    this.fruits.push("nanai");
    this.fruits.push("rathod");
  }
  dataChanged(data:string){
    this.fruits=this.fruits.filter(info=>{
      info.toLowerCase().indexOf(data);
    })
  }
}
