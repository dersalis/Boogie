import { IProductForTable } from './../../models/iproductfortable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productsadmin',
  templateUrl: './productsadmin.component.html',
  styleUrls: ['./productsadmin.component.css']
})
export class ProductsadminComponent implements OnInit {

  public products: IProductForTable[] = [];

  constructor() {
    this.products = [
      {'id': '1', 'name': 'Majtki bawełniane', 'category': 'Bielizna', 'availability': 34, 'price': 450},
      {'id': '2', 'name': 'Majtki koronkowe', 'category': 'Bielizna', 'availability': 27, 'price': 345},
      {'id': '3', 'name': 'Skarpety stópki', 'category': 'Bielizna', 'availability': 12, 'price': 240}
    ];
  }

  ngOnInit(): void {
  }

}
