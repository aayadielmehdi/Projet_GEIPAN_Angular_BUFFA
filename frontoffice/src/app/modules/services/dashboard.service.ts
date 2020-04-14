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

}
