import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor (private httpClient: HttpClient){

  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    const response = this.httpClient.get("https://api.escuelajs.co/api/v1/products").subscribe(
    response => {
      console.log(response);
    }
    )
  }

}

