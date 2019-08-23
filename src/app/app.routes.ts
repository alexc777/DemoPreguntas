import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { AprobacionComponent } from './components/aprobacion/aprobacion.component';
import { DesaprobadasComponent } from './components/desaprobadas/desaprobadas.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ContestadasComponent } from './components/contestadas/contestadas.component';

const routes: Routes = [
  { path: 'preguntas', component: ChatComponent },
  { path: 'aprobacion', component: AprobacionComponent },
  { path: 'desaprobadas', component: DesaprobadasComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'completadas', component: ContestadasComponent },
  { path: '**', pathMatch:'full', redirectTo: 'preguntas' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash:true });
