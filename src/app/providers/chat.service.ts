import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  preguntas: any[] = [];
  aprobacion:any[] = [];
  aprobadas:any[] = [];
  desaprobadas:any[] = [];
  completadas:any[] = [];


  constructor(private afs: AngularFirestore) {}

  cargarMensajes(){
    this.getDataId().subscribe( (respPregunstas:any) => {
      this.preguntas = respPregunstas;


      /**
       *
       * Estados para las preguntas
       * 1 = Pregunta en revisión
       * 2 = Pregunta Aprobada
       * 3 = Pregunda Desaprobada
       * 4 = Pregunta Contestada
       *
       */
      this.aprobacion = [];
      this.aprobadas = [];
      this.desaprobadas = [];
      this.completadas = [];

      this.preguntas.forEach(element => {
        if (element.estado === 1) {
          this.aprobacion.push(element);
        }else if (element.estado === 2) {
          this.aprobadas.push(element)
        } else if (element.estado === 3) {
          this.desaprobadas.push(element)
        } else if (element.estado === 4) {
          this.completadas.push(element)
        }
      });
    });
  }

  getDataId() {
    this.itemsCollection = this.afs.collection<any>('preguntas', ref => ref.orderBy('hora', 'asc'));

    return this.itemsCollection.snapshotChanges().pipe(map(resPre => {
      return resPre.map(a => {
        const data = a.payload.doc.data() as Pregunta;
        data.id = a.payload.doc.id;
        return data;
      });
    }))
  }

  aprobarPregunta(pregunta:Pregunta ,key:string) {
    let updatePregunta = pregunta;
    updatePregunta.estado = 2;
    this.afs.collection("preguntas").doc(key).update(updatePregunta).then( () => {
      console.log('Pregunta Aprobada');
    }).catch( err => {
      console.log('Error al aprobar pregunta: ', err);
    });
  }

  desaprobarPregunta(pregunta: Pregunta, key: string) {
    let updatePregunta = pregunta;
    updatePregunta.estado = 3;
    this.afs.collection("preguntas").doc(key).update(updatePregunta).then( () => {
      console.log('Pregunta desaprobada');
    }).catch( err => {
      console.log('Error al desaprobar pregunta: ', err);
    });
  }

  completarPregunta(pregunta: Pregunta, key: string) {
    let updatePregunta = pregunta;
    updatePregunta.estado = 4;

    this.afs.collection("preguntas").doc(key).update(updatePregunta).then( () => {
      console.log('Pregunta Completada');
    }).catch( error => {
      console.log('Error al completar pregunta: ', error);
    });
  }

  eliminarPregunta(key:string) {
    this.afs.collection("preguntas").doc(key).delete().then( () => {
      console.log("Se elimino: ");
    }).catch( error => {
      console.error("Error Al eliminar: ", error);
    });
  }
}

interface Pregunta {
  nombre:string,
  apellido:string,
  pregunta:string,
  hora:any,
  estado:number,
  id?:string
}


