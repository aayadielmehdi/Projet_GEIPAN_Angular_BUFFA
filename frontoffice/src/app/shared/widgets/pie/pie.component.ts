import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})

export class PieComponent implements OnInit {

  chartOptions = {}

  Highcharts = Highcharts;

  @Input() data = []

  constructor() { }

  ngOnInit(): void {

    // console.log(this.data)

    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Stats par types de cas'
      },
      subtitle: {
        text: 'Répartition par classification'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [{
        name: 'Pourcentage',
        colorByPoint: true,
        data: this.data
      }]

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


  // le binding ne marche pas avec highchart faut faire le setData
  ngAfterContentInit(): void {    
    //this.chartOptions.series[0].setData(this.data)
    console.log("(AAYADI) Erreur au niveau du dashbord vient de mise a jour data graphe , le binding auto ne marche pas !!")
    this.Highcharts.Series[0].setData(this.data)
    
  }

}
