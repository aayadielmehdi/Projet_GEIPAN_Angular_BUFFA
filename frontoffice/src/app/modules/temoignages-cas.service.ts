import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TemoignagesCasService {

  urlapi = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  GetCas(id : string ){
    return (this.http.get(this.urlapi + '/api/cases/' + id))
  }

  GetCountTemByCas(id_cas : string ){
    return (this.http.get(this.urlapi + '/api/cas-temoignages/count/' + id_cas))
  }

  GetTemByCas(id_cas : string , query : string){
    return (this.http.get(this.urlapi + '/api/cas-temoignages/' + id_cas + query))
  }

}
