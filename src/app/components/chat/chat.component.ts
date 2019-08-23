import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  constructor(public _cs:ChatService) {
    this._cs.cargarMensajes();
  }

  completarPregunta(pregunta:any, uid:string) {
    this._cs.completarPregunta(pregunta,uid);
  }
}
