import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  eliminarUsuario() {
    Swal.fire({
      title: '¿Seguro que quieres eliminar al usuario Efrain?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, borrar usuario',
      denyButtonText: `No borrar usuario`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Exito!', 'El usuario se ha borrado correctamente', 'success')
      } else if (result.isDenied) {
        Swal.fire('Error', 'El usuario no se ha eliminado', 'error')
      }
    })
  }

}
