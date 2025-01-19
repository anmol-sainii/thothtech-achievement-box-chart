import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  multi: any[];
  view: any[] = [1000, 600];

 
  showXAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  animations: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event) {
    console.log(event);
  }
}
