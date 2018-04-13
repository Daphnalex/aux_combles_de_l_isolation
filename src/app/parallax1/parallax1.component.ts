import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax1',
  templateUrl: './parallax1.component.html',
  styleUrls: ['./parallax1.component.css']
})
export class Parallax1Component implements OnInit {

  public HeightDevice = window.screen.height-94;

  constructor() { }

  ngOnInit() {
    console.log('HeightDevice', this.HeightDevice);
  }

}
