import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts_graphe from 'highcharts';
import { DashboardService } from 'src/app/modules/services/dashboard.service';


@Component({
    selector: 'app-widget-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

    constructor(private ds: DashboardService) { }

    public chartOptions : any = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stats des cas'
        },
        subtitle: {
            text: 'Répartition par département'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cas'
            }
        },
        exporting: {
            enabled: true,
        },
        credits: {
            enabled: false,
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f} Cas</b>'
        },
        series: [{
            name: 'Population',
            data: [],    
        }]
    };


    ngOnInit(): void {

        var table: any = []

        // le traitement je l'ai fait ici pour recupération des data (quand je l'ai fait en dashbord service , et passer @input to piechart ne marche pas)
        this.ds.RepresentationCasParZoneNom().subscribe((data: any) => {
            data.forEach(element => {
                table.push([
                    element._id,
                    element.count
                ])
            });
            this.chartOptions.series[0]['data'] = table
            Highcharts_graphe.chart('container-graphe',this.chartOptions)            
        })

        // redimentionnement de la charte ou du componenet
        setTimeout(() => {
            window.dispatchEvent(
                new Event('resize')
            );
        }, 300);

    }

}
