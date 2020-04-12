import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CasesService {

  urlapi = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  GetZoneNom() {
    return (this.http.get(this.urlapi + '/api/zonenom'));
  }

  GetZoneCode() {
    return (this.http.get(this.urlapi + '/api/zonecode'))
  }

  GetJJ(){
    return (this.http.get(this.urlapi + '/api/JJ'))
  }

  GetMM(){
    return (this.http.get(this.urlapi + '/api/MM'))
  }

  GetAAAA(){
    return (this.http.get(this.urlapi + '/api/AAAA'))
  }

  GetCases(requete : string = ""){
    return (this.http.get(this.urlapi + '/api/cases' + requete))
  }

  GetCountCases(requete : string = ""){
    return (this.http.get(this.urlapi + '/api/cases/count' + requete))
  }
}
