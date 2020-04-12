import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {


  @Input() data  = []

  chartOptions = {}

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Random Test'
      },
      subtitle: {
        text: 'Mn Walou'
      },
      tooltip: {
        split: true,
        valueSuffix: ' MMM '
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: this.data
    };


    // permettre de faire l'exportation de mon graph
    HC_exporting(this.Highcharts);



    // redimentionnement de la charte ou du componenet
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }



}
