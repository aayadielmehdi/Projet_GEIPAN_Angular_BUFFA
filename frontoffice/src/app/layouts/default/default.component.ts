import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {


  sideBarOpen = true

  constructor() { }

  ngOnInit() {
  }

  sideBarToggle(val : any){
    this.sideBarOpen = ! this.sideBarOpen
  }
}
