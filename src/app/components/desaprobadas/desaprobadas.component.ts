import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-desaprobadas',
  templateUrl: './desaprobadas.component.html',
  styleUrls: ['./desaprobadas.component.css']
})
export class DesaprobadasComponent implements OnInit {

  constructor(public _cs:ChatService) { }

  ngOnInit() {
    this._cs.cargarMensajes();
  }

  eliminar(uid:string) {
    this._cs.eliminarPregunta(uid);
  }

}
