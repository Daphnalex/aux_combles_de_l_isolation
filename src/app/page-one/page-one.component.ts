import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  public HeightDevice = window.screen.height-94;
  public WidthDevice= window.screen.width;

  constructor() { }

  ngOnInit() {
    console.log('WidthDevice', this.WidthDevice);
    console.log('HeightDevice', this.HeightDevice);
  }

}
