import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = []
  pieChart: any[] = []

  constructor(private ds: DashboardService) { }


  ngOnInit() {
    this.bigChart = this.ds.bigChart();
    this.pieChart = this.ds.pieChart()
  }

}



