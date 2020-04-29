import { Component, ViewChild, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  categorias = ['business', 'entertainment', 'sports', 'technology', 'general', 'health', 'science'];

  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService ) {}

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.cargarNoticias( this.categorias[0] );
  }

  cambioCategoria( event ) {

    this.noticias = [];

    this.cargarNoticias( event.detail.value );
  }

  cargarNoticias( categoria: string ) {

    this.noticiasService.getTopHeadLinesCategoria( categoria )
      .subscribe( resp => {
        console.log(resp);
        this.noticias.push( ...resp.articles );
      } );
  }

}
