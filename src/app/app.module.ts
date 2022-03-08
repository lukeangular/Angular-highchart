import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BasicChartComponent } from './components/basic-chart/basic-chart.component';
import { MapChartComponent } from './components/map-chart/map-chart.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { CandleStickChartComponent } from './components/candle-stick-chart/candle-stick-chart.component';
import { NepseChartComponent } from './components/nepse-chart/nepse-chart.component';;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BasicChartComponent,
    MapChartComponent,
    StockChartComponent,
    CandleStickChartComponent,
    NepseChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
