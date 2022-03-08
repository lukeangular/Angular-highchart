import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicChartComponent } from './components/basic-chart/basic-chart.component';
import { CandleStickChartComponent } from './components/candle-stick-chart/candle-stick-chart.component';
import { HomeComponent } from './components/home/home.component';
import { MapChartComponent } from './components/map-chart/map-chart.component';
import { NepseChartComponent } from './components/nepse-chart/nepse-chart.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'basic-chart', component:BasicChartComponent},
  {path:'map-chart', component:MapChartComponent},
  {path:'map-chart', component:MapChartComponent},
  {path:'stock-chart', component:StockChartComponent},
  {path:'candle-chart', component:CandleStickChartComponent},
  {path:'nepse-chart', component:NepseChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
