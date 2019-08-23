import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

//Rutas
import { appRouting } from './app.routes';

//Servicios
import { ChatService } from './providers/chat.service';

//Componets
import { ChatComponent } from './components/chat/chat.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { AprobacionComponent } from './components/aprobacion/aprobacion.component';
import { DesaprobadasComponent } from './components/desaprobadas/desaprobadas.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ContestadasComponent } from './components/contestadas/contestadas.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MenuComponent,
    AprobacionComponent,
    DesaprobadasComponent,
    ListadoComponent,
    ContestadasComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    appRouting
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
