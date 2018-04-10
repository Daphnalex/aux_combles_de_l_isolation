import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit, AfterViewInit {

  public HeightDevice = window.screen.height-94;
  public WidthDevice= window.screen.width;
  public WidthOfDiv : number;
  public divLoaded = false;
  public service1Hover = false;
  public service2Hover = false;
  public service3Hover = false;
  public service4Hover = false;

  constructor() {

  }

  ngOnInit() {
    console.log('WidthDevice', this.WidthDevice);
    console.log('HeightDevice', this.HeightDevice);

  }
  ngAfterViewInit(){
    this.WidthOfDiv = document.getElementById("icone").offsetWidth;

    console.log('WidthOfDiv',this.WidthOfDiv);
    if (this.WidthOfDiv !== null){
      this.divLoaded = true;
    }
   $(document).ready(function(){
       $('.carousel').carousel();
     });
  }
  mouseEnter(idElement){
    console.log('idElement', idElement);
    switch(idElement){
      case "service1" :
        this.service1Hover = true;
        break;
      case "service2" :
        this.service2Hover = true;
        break;
      case "service3" :
        this.service3Hover = true;
        break;
      case "service4" :
        this.service4Hover = true;
        break;
    }
  }
  mouseLeave(idElement){
    console.log('idElement', idElement);
    switch(idElement){
      case "service1" :
        this.service1Hover = false;
        break;
      case "service2" :
        this.service2Hover = false;
        break;
      case "service3" :
        this.service3Hover = false;
        break;
      case "service4" :
        this.service4Hover = false;
        break;
    }
  }


}
