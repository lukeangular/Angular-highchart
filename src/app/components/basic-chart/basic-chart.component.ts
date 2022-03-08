import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import theme from 'highcharts/themes/dark-unica';
theme(Highcharts);


@Component({
  selector: 'app-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.css']
})
export class BasicChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
  }

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: "line",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

}
