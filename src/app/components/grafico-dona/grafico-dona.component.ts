import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {
  
  // Doughnut
  @Input('chartLabels') doughnutChartLabels:string[] = [];
  @Input('chartData') doughnutChartData:number[] = [];
  @Input('chartType') doughnutChartType:string = ''; 
  constructor() { }

  ngOnInit() {
    console.log(this.doughnutChartLabels); 
  }

}
