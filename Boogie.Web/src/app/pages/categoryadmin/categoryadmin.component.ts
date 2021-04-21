import { ICategoryForTable } from './../../models/icategoryfortable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoryadmin',
  templateUrl: './categoryadmin.component.html',
  styleUrls: ['./categoryadmin.component.css']
})
export class CategoryadminComponent implements OnInit {

  public categories: ICategoryForTable[] = [];

  constructor() {
    this.categories = [
      {'id': '1', 'name': 'Bielizna', 'productsCount': 450},
      {'id': '2', 'name': 'Czapki', 'productsCount': 345},
      {'id': '3', 'name': 'Koszulki', 'productsCount': 240},
      {'id': '4', 'name': 'Buty', 'productsCount': 20}
    ];
  }

  ngOnInit(): void {
  }

}
