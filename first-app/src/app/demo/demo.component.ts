import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { demoData } from './demo.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  formValue!: FormGroup
  demoModelObj: demoData = new demoData;
  alldemoData:any;
  showAdd!:boolean
  showbtn!:boolean
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    })
    this.getAllData();
  }
  clickAddResto(){
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
  }
  addDemo() {
    this.demoModelObj.name = this.formValue.value.name;
    this.demoModelObj.email = this.formValue.value.email;
    this.demoModelObj.mobile = this.formValue.value.mobile;
    this.demoModelObj.address = this.formValue.value.address;
    this.demoModelObj.services = this.formValue.value.services;

    this.api.postdemo(this.demoModelObj).subscribe(res => {
      console.log(res);
      alert("demo records added successfully");
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
    },
      err => {
        alert("kuch to galat hai teja")
      }
    )
  }
  getAllData() {
    this.api.getdemo().subscribe(res => {
      this.alldemoData = res;
    })
  }
  deleteResto(data:any){
    this.api.deletedemo(data.id).subscribe(res=>{
      alert("record deleted suuccessfully");
      this.getAllData();
    })
  }
  onEditResto(data:any){
    this.showAdd=false;
    this.showbtn=true;
    this.demoModelObj.id=data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }
  updateResto(){
    this.demoModelObj.name = this.formValue.value.name;
    this.demoModelObj.email = this.formValue.value.email;
    this.demoModelObj.mobile = this.formValue.value.mobile;
    this.demoModelObj.address = this.formValue.value.address;
    this.demoModelObj.services = this.formValue.value.services;

    this.api.updatedemo(this.demoModelObj,this.demoModelObj.id).subscribe(res=>{
      alert("restaurant records updated");
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset()
     this.getAllData();
    })
  }
}
