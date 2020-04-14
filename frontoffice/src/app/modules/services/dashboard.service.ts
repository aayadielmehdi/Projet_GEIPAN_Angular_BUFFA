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

  RepresentationCasParZoneNom() {
    return this.http.get(this.urlapi + '/api/RepartitionCasParZoneNom')
  }

  bigChart() {
 //tableau a deux dimension
    var table: any = [] 
    this.RepresentationCasParZoneNom().subscribe((data: any) => {
      data.forEach(element => {
        table.push([
          element._id,
          element.count
        ])
      });

    })
    return table  
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
