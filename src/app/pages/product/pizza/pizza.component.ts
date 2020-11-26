import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfacecs/product.interface';
import { OrderService } from 'src/app/service/order.service';
import { ProductsService } from 'src/app/service/product.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  products: Array<IProduct> = [];
  constructor(private prodService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  private getProducts(): void {
    this.prodService.getProducts().subscribe(data => {
      if(data.some(data => data.category.name === 'pizza')){
        this.products = data.filter(data => data.category.name === 'pizza')
        console.log(this.products);
        
      } 
    })
  }

 productCount(prod: IProduct,status: boolean):void{
   if(status){
    prod.count++;
   }
   else{
    if(prod.count > 1){
    prod.count--;
    }
  }
 }
 addToBasket(prod:IProduct):void{
   this.orderService.addBasket(prod)
   console.log(prod);
   prod.count = 1;

   
 }
}
