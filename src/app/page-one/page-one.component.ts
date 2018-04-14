import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  public HeightDevice = window.screen.height-94;
  public WidthDevice= window.screen.width;
  public HeightNavBar: number;
  public HeightFooter: number;

  constructor() {

  }

  ngOnInit() {
    console.log('WidthDevice', this.WidthDevice);
    console.log('HeightDevice', this.HeightDevice);
    document.getElementById('arrowButton').style.display='none';
    this.HeightNavBar = document.getElementById("navbar").offsetHeight;
    this.HeightFooter = document.getElementById("footer").offsetHeight;

   (<any>$(document)).ready(function(){
      // au clic sur un lien
      $('a').on('click', function(evt){
         // bloquer le comportement par défaut: on ne rechargera pas la page
         evt.preventDefault();
         // enregistre la valeur de l'attribut  href dans la variable target
  	var target = $(this).attr('href');
         /* le sélecteur $(html, body) permet de corriger un bug sur chrome
         et safari (webkit) */
  	$('html, body')
         // on arrête toutes les animations en cours
         .stop()
         /* on fait maintenant l'animation vers le haut (scrollTop) vers
          notre ancre target */
         .animate({scrollTop: $(target).offset().top}, 1000 );
      });
    });

    $(window).scroll(function(){
      console.log('Test',window.scrollY);
      if(window.scrollY > 620){
        document.getElementById('arrowButton').style.display='block';
      } else {
        document.getElementById('arrowButton').style.display='none';
      }
    });
  }

}
