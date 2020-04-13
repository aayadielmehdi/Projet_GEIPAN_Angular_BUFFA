import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemoignagesCasService } from '../services/temoignages-cas.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-temoignages-cas',
  templateUrl: './temoignages-cas.component.html',
  styleUrls: ['./temoignages-cas.component.scss']
})
export class TemoignagesCasComponent implements OnInit {

  // _id cas (objectID)
  _id: any

  pageSize = 5 // taille du tableau 
  pageIndex = 0 // numero de la page
  countTem = 0 // le nombre des cas selon les critères de recherche

  id_cas: string
  nomDossier: string
  numEtude: string
  zone: string
  zoneType: string
  date: string
  dateMAJ: string
  resume: string

  dataSourceTems: any = []
  displayedColumns: string[] = ['obs_date_heure', 'obs_duree_hms', 'obs_continuite_type', 'tem_resume'];


  constructor(private route: ActivatedRoute, private tcs: TemoignagesCasService) { }

  ngOnInit():  void {
    this.route.params.subscribe(params => {
      this._id = params['id']
    })
    this.GetInfoCas(this._id)
  }

  

  QueryPaggination() {
    let chainedequery = '?'
    chainedequery += `pagesize=${this.pageSize}&`
    chainedequery += `pageindex=${this.pageIndex}&`
    return chainedequery
  }

  // get info tem correspondante au id_cas
  GetServerData(event?: PageEvent) {
    // recuperation de nombre de ligne selon les critére de recherche
    this.tcs.GetCountTemByCas(this.id_cas).subscribe( (data : any) => this.countTem = data )

    if (event !== undefined) {
      this.pageIndex = event.pageIndex
      this.pageSize = event.pageSize
    }
    this.tcs.GetTemByCas(this.id_cas, this.QueryPaggination()).subscribe((data: any) =>
      this.dataSourceTems = data
    )
  }

  // get info cas correspondante au _id
  GetInfoCas(id: string) {
    this.tcs.GetCas(id).subscribe((data: any) => {
      this.id_cas = data.cas.id_cas
      this.nomDossier = data.cas.cas_nom_dossier
      this.numEtude = data.cas.cas_numEtude
      this.zone = `(${data.cas.cas_zone_code})${data.cas.cas_zone_nom}`
      this.zoneType = data.cas.cas_zone_type
      this.date = data.cas.cas_AAAA + '/' + data.cas.cas_MM + '/' + data.cas.cas_JJ
      this.dateMAJ = data.cas.cas_date_maj
      this.resume = data.cas.cas_resume 
      this.GetServerData()     
    })


  }

}
