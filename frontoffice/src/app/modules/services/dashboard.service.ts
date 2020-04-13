import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  urlapi = "http://localhost:8080"


  constructor(private http: HttpClient) {
  }

  RepresentationCasParClassification() {
    return this.http.get(this.urlapi + '/api/RepCasParClassification')
  }

  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  pieChart() {

    var table: any = []
    this.RepresentationCasParClassification().subscribe((data: any) => {
      data.forEach(element => {
        table.push({
          name: element._id,
          y: element.count
        })
      });
    })

    return table

    // return [
    //   {name: "A", y: 595},{name: "B", y: 1108},{name: "C", y: 942},{name: "D1", y: 36},{name: "D", y: 87}
    // ]
  }

}
