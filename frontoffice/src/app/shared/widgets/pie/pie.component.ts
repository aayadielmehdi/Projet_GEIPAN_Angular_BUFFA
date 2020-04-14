import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts_pie from 'highcharts';
import { DashboardService } from 'src/app/modules/services/dashboard.service';

// demo du highschart-angular
// https://github.com/highcharts/highcharts-angular#demo-app

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})

export class PieComponent implements OnInit {

  constructor(private ds: DashboardService) { }


  public chartOptions: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Stats des cas'
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
      name: 'Classification',
      colorByPoint: true,
      data: []
    }]
  };


  ngOnInit(): void {

    var table: any = []

    // le traitement je l'ai fait ici pour recupération des data (quand je l'ai fait en dashbord service , et passer @input to piechart ne marche pas)
    this.ds.RepresentationCasParClassification().subscribe((data: any) => {
      data.forEach(element => {
        table.push({
          name: element._id,
          y: element.count
        })
      });
      this.chartOptions.series[0].data = table
      Highcharts_pie.chart('container_pie', this.chartOptions)
    })



    // redimentionnement de la charte ou du componenet
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }


}
