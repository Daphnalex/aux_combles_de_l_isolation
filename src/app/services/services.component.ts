import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  public WidthOfDiv : number;
  public divLoaded = false;
  public service1Hover = false;
  public service2Hover = false;
  public service3Hover = false;
  public service4Hover = false;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    //get the width of the div icone to define the height of the div in html
    this.WidthOfDiv = document.getElementById("icone").offsetWidth;
    console.log('WidthOfDiv',this.WidthOfDiv);
    if (this.WidthOfDiv !== null){
      this.divLoaded = true;
    }
  }
  
  //hover to icone services
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
