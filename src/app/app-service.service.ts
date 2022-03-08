import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


  constructor(private http: HttpClient) {}

  getCandleData() {
    return this.http.get('./assets/data/aapl-ohlcv.json');
  }

  getStockData() {
   return this.http.get('./assets/data/stock.json')
  }

}
