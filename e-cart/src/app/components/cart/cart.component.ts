import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products:any=[];
allProducts:any=0;
  constructor(private cartapi:CartapiService) { }

  ngOnInit(): void {
    this.cartapi.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.cartapi.getTotalAmount();
    })
  }
  removeProduct(item:any){
    this.cartapi.removeCartData(item);
  }
  removeAllProduct(){
    this.cartapi.removeAllCart();
  }
  checkAll(){
    alert("already You Have In Cart");
  }

}
