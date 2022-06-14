import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
cartDatalist:any=[];
productList=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }
  //get product data
  getProductData(){
    return this.productList.asObservable();
  }
  //set product data
  setProduct(product:any){
    this.cartDatalist.push(...product);
    this.productList.next(product)
  }
  //add to cart details
  addToCart(product:any){
    this.cartDatalist.push(product);
    this.productList.next(this.cartDatalist);
    this.getTotalAmount();
    console.log(this.cartDatalist);
  }
  //get Total amount
  getTotalAmount(){
    let grandTotal=0;
    this.cartDatalist.map((a:any)=>{
      grandTotal+=a.total;
    })  
    return grandTotal;
  }
  //Remove  Cart data one by one
  removeCartData(product:any){
    this.cartDatalist.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartDatalist.splice(index,1)
      }
    })
    this.productList.next(this.cartDatalist)
  }
  //Remove All Cart Data
  removeAllCart(){
    this.cartDatalist=[]
    this.productList.next(this.cartDatalist)
  }
}
