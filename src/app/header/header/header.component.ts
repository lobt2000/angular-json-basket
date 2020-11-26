import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfacecs/product.interface';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  basket: Array<IProduct> = [];
  totalPrice = 0;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.checkMyBasket();
    this.getLocalProd();
  }
  private checkMyBasket():void{
    this.orderService.basket.subscribe(
      data =>{
        this.basket = data;
        this.totalPrice = this.getTotal(this.basket)
      }
    )
  }
  private getLocalProd():void{
    if(localStorage.getItem('basket')){
      this.basket = JSON.parse(localStorage.getItem('basket'));
      this.totalPrice = this.getTotal(this.basket)
    }
  }
private getTotal(prod: Array<IProduct>):number{
  return prod.reduce((total, prod) => total + (prod.price*prod.count),0);
}
}
