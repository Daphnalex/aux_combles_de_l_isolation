import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css']
})
export class RealisationsComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){

   (<any>$(document)).ready(function(){
       (<any>$('.carousel')).carousel();
     });
  }

}
