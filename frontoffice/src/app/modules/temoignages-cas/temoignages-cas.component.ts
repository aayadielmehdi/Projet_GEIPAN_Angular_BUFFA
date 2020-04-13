import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temoignages-cas',
  templateUrl: './temoignages-cas.component.html',
  styleUrls: ['./temoignages-cas.component.scss']
})
export class TemoignagesCasComponent implements OnInit {

  id : any 

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

}
