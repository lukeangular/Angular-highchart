import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const TradingView: any;

@Component({
  selector: 'app-nepse-chart',
  templateUrl: './nepse-chart.component.html',
  styleUrls: ['./nepse-chart.component.css']
})
export class NepseChartComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    new TradingView.widget(
      {
      "width": 980,
      "height": 610,
      "symbol": "NASDAQ:AAPL",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "2",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "withdateranges": true,
      "range": "ytd",
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
      "no_referral_id": true,
      'save_image': true,
      "container_id": "technical-analysis",
      'studies': [
        'MASimple@tv-basicstudies'],
      'autosize': false,
      'interval': '120',
      'hideideas': true,
    }
      );
  }


}
