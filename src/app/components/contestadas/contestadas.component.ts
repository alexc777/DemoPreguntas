import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-contestadas',
  templateUrl: './contestadas.component.html',
  styleUrls: ['./contestadas.component.css']
})
export class ContestadasComponent implements OnInit {

  constructor(public _cs:ChatService) { }

  ngOnInit() {
    this._cs.cargarMensajes();
  }

}
