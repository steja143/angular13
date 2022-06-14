import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productlist:any;
  constructor(private api:ApiService,private cartapi:CartapiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productlist=res;
      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    })
  }
addtoCart(item:any){
this.cartapi.addToCart(item);
}
}
