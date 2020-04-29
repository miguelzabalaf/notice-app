import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  categorias = ['Negocios', 'Entretenimiento', 'General', 'Salud', 'Ciencia'];

  constructor() {}

  ngOnInit() {
  }

}
