import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-aprobacion',
  templateUrl: './aprobacion.component.html',
  styleUrls: ['./aprobacion.component.css']
})
export class AprobacionComponent implements OnInit {

  constructor(public _cs:ChatService) {
    this._cs.cargarMensajes();
  }

  aprobarPregunta(pregunta:any, uid: string) {
    this._cs.aprobarPregunta(pregunta, uid);
  }

  desaprobarPregunta(pregunta:any, uid:string) {
    this._cs.desaprobarPregunta(pregunta, uid);
  }

  ngOnInit() {
  }

}
