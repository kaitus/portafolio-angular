import { InfopaginaService } from './../../services/infopagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio : number = new Date().getFullYear();

  constructor( public _servicio : InfopaginaService ) { }

  ngOnInit() {
  }

}
