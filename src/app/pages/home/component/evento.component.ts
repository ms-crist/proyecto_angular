
import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tarea.service';
import { TareaPendiente } from './tarea.pendiente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event',
  templateUrl: './evento.component.component.html',
  styleUrls: ['./component.component.css']
})

export class EventoComponent implements OnInit {
  fecha: any = new Date();

  constructor(private tareasService: TareasService) { }

  nombreTarea: any = ""
  fechaTarea: any = ""
  lugarTarea: any = ""
  descripcionTarea: any = ""
  public tareas: TareaPendiente[] = []




  guardarTarea() {
    const nuevaTarea = new TareaPendiente(this.nombreTarea, this.fechaTarea, this.lugarTarea, this.descripcionTarea);
    this.tareas.push(nuevaTarea);
    this.tareasService.guardarTareas(this.tareas);
    this.obtenerTareas();
    this.nombreTarea = "", this.fechaTarea = "", this.lugarTarea = "", this.descripcionTarea = "";
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tarea guardada',
      showConfirmButton: false,
      timer: 1500
    })


  }

  eliminarTarea(indice: number) {
    Swal.fire({
      title: '¿Estás seguro de borrar?',
      text: "¡No podrás revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrada!',
          'La tarea ha sido eliminada',
          'success'
        )
        this.tareas.splice(indice, 1);
        this.tareasService.guardarTareas(this.tareas);
      }
    })
  }


  cambiarEstadoDeTarea() {
    Swal.fire({
      title: '¿Desea cambiar el estado de tarea?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Guardada!', '', 'success')
        this.tareasService.guardarTareas(this.tareas);

      } else if (result.isDenied) {
        Swal.fire('No se guardaron los cambios', '', 'info')
        this.tareas = this.tareasService.obtenerTareas();
      }
      this.tareas = this.tareasService.obtenerTareas();
    })
  }

  obtenerTareas() {
    this.tareas = this.tareasService.obtenerTareas();
    return this.tareas.sort((a, b) => {
      return <any>new Date(b.fecha) - <any>new Date(a.fecha);
    });
  }

  ngOnInit() {
    this.obtenerTareas();

  }

}
