import { Component, OnInit } from '@angular/core';
import { CasesService } from '../cases.service'
import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  pageSize = 5 // taille du tableau 
  pageIndex = 0 // numero de la page
  countCases = 0 // le nombre des cas selon les critères de recherche

  ensembleZoneNom: any = ['test1', 'test2']
  ensembleZoneCode: any = ['code1', 'code2']
  ensembleJJ: any = ['j1', 'j2']
  ensembleMM: any = ['m1', 'm2']
  ensembleAAAA: any = ['a1', 'a2']
  dataSourceCases: any = []

  selectedNomDossier: string = ''
  selectedNumEtude: string = ''
  // j'ai pas mi '' car il existe des ligne de la base avec ''
  selectedZoneNom: string
  selectedZoneCode: string
  selectedJJ: string
  selectedMM: string
  selectedAAAA: string


  displayedColumns: string[] = ['cas_nom_dossier', 'cas_numEtude', 'date', 'zone', 'resume_web', 'detail'];
  constructor(private cs: CasesService) { }


  ngOnInit() {
    this.cs.GetZoneNom().subscribe(data => this.ensembleZoneNom = data)
    this.cs.GetZoneCode().subscribe(data => this.ensembleZoneCode = data)
    this.cs.GetJJ().subscribe(data => this.ensembleJJ = data)
    this.cs.GetMM().subscribe(data => this.ensembleMM = data)
    this.cs.GetAAAA().subscribe(data => this.ensembleAAAA = data)
    this.GetServerData()
  }

  // requete de recherche et de pagination
  QueryRecherche() {
    let chainedequery = '?'
    chainedequery += (this.selectedNomDossier != '') ? `nomDossier=${this.selectedNomDossier}&` : ``
    chainedequery += (this.selectedNumEtude != '') ? `numEtude=${this.selectedNumEtude}&` : ``
    chainedequery += (this.selectedZoneNom != undefined) ? `zoneNom=${this.selectedZoneNom}&` : ``
    chainedequery += (this.selectedZoneCode != undefined) ? `zoneCode=${this.selectedZoneCode}&` : ``
    chainedequery += (this.selectedJJ != undefined) ? `jour=${this.selectedJJ}&` : ``
    chainedequery += (this.selectedMM != undefined) ? `mois=${this.selectedMM}&` : ``
    chainedequery += (this.selectedAAAA != undefined) ? `annee=${this.selectedAAAA}&` : ``
    return chainedequery
  }

  QueryPaggination() {
    let chainedequery = ''
    chainedequery += `pagesize=${this.pageSize}&`
    chainedequery += `pageindex=${this.pageIndex}&`
    return chainedequery
  }

  GetServerData(event?: PageEvent) {

    // recuperation de nombre de ligne selon les critére de recherche
    this.cs.GetCountCases(this.QueryRecherche()).subscribe((data: any) => this.countCases = data.count)

    if (event !== undefined) {
      this.pageIndex = event.pageIndex
      this.pageSize = event.pageSize
    }
    this.cs.GetCases(this.QueryRecherche() + this.QueryPaggination()).subscribe((data: any) =>
      this.dataSourceCases = data.data
    )
  }

}
