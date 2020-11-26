import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfacecs/product.interface';
import { ProductsService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isCollapsed = false;
  products: Array<IProduct> = [];
  constructor(private prodService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts()
  }
  private getProducts(): void {
    this.prodService.getProducts().subscribe(data => {
      this.products = data
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
//  addToBasket(prod:IProduct):void{
//    this.orderService.addBasket(prod)
//    console.log(prod);
//    prod.count = 1;

   
//  }
}
